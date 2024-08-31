import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate('/');
  };

  return (
    <div className="signup-page">
      <Container className="signup-container">
        <Row>
          <Col md={6} className="text-center">
            <div className="image-wrapper">
              <img
                src="https://htmldemo.net/edule/eduLe/assets/images/register-login.png"
                alt="Sign Up"
                className="img-fluid signup-image"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="signup-form">
              <h3 className="mb-4">Registration <span>Now</span></h3>
              <Form>
                <Form.Group controlId="formName">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formConfirmPassword">
                  <Form.Control type="password" placeholder="Confirm Password" />
                </Form.Group>

                <Button variant="success" type="submit" className="w-100 mb-3">
                  Create an account
                </Button>

                <Button variant="outline-secondary" type="button" className="w-100" onClick={handleSignUp}>
                  Sign up with Google
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
