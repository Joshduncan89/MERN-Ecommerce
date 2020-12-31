import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <Form inline onSubmit={submitHandler}>
      <Form.Control
        type='text'
        className='mr-sm-2 ml-sm-5'
        placeholder='Enter Product...'
        onChange={(e) => setKeyword(e.target.value)}
        name='q'
        value={keyword}
      />
      <Button variant='outline-success' type='submit'>
        Search
      </Button>
    </Form>
  );
};

export default withRouter(SearchBox);
