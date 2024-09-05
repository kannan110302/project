import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
  return (
    <Container className="banner-container">
      <Row className="align-items-center justify-content-center">
        <Col md={8} className="text-column">
          <h5 className="sub-heading">Become A Instructor</h5>
          <h2 className="main-heading">
            You can join with Edule as an <span className="highlight">instructor?</span>
          </h2>
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-4.png"
            alt="underline"
            className="underline-imageone"
          />
        </Col>
        <Col md={4} className="button-column">
          <Button variant="success" className="drop-info-btnone">
            Drop Information
          </Button>
          <img
            src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-13.svg"
            alt="green-arrowone"
            className="green-arrowone"
          />
        </Col>
      </Row>
      <img
        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-12.png"
        alt="yellow-dots-leftone"
        className="yellow-dotsone yellow-dots-leftone"
      />
      <img
        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-12.png"
        alt="yellow-dots-rightone"
        className="yellow-dotsone yellow-dots-rightone"
      />
    </Container>
  );
};

export default Banner;

