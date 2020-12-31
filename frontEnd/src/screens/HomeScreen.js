import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const currentPage = match.params.pageNumber;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { error, loading, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' />
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col
                sm={12}
                lg={4}
                xl={3}
                md={6}
                style={{ marginBottom: "20px" }}
                key={product._id}
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
