import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/');
  };

  return (
    <div className="signin-page">
      <Container className="signin-container">
        <Row>
          <Col md={6} className="text-center">
            <div className="image-wrapper">
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/register-login.png"
                alt="Sign In"
                className="img-fluid signin-image"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="signin-form">
              <h3 className="mb-4">Login <span>Now</span></h3>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Username or Email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 mb-3">
                  Login
                </Button>

                <Button variant="outline-secondary" type="button" className="w-100" onClick={handleSignIn}>
                  Login with Google
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;
