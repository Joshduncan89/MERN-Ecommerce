import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);

  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress.address || null);
  const [city, setCity] = useState(shippingAddress.city || null);
  const [postalCode, setPostalCode] = useState(
    shippingAddress.postalCode || null
  );
  const [country, setCountry] = useState(shippingAddress.country || null);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(saveShippingAddress({ address, city, postalCode, country }));

    history.push("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='address'
            value={address}
            placeholder='Enter Address'
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='city'
            value={city}
            placeholder='Enter City'
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='PostalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='postalCode'
            value={postalCode}
            placeholder='Enter Postal Code'
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='country'
            value={country}
            placeholder='Country'
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button variant='primary' type='submit'>
          Continue to payment
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
