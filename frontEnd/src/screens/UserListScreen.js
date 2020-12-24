import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listUsers } from "../actions/userActions";

const UserListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userList = useSelector((state) => state.userList);
  const userLogin = useSelector((state) => state.userLogin);

  const { userInfo } = userLogin;
  const { users, loading, error } = userList;

  const deleteHandler = () => {};

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listUsers());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger' />
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADMIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: "green" }} />
                  ) : (
                    <i className='fas fa-times' style={{ color: "red" }} />
                  )}
                </td>
                <td>
                  <LinkContainer to={`/users/${user._id}/edit`}>
                    <Button variant='primary' className='btn btn-sm'>
                      <i className='fas fa-edit' />
                    </Button>
                  </LinkContainer>
                  <Button
                    className='btn btn-sm'
                    variant='danger'
                    onClick={deleteHandler(user._id)}
                  >
                    <i className='fas fa-trash' />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
