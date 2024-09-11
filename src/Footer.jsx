import React from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-section">
      <Container>
        <Row className="footer-content">
          {/* Left Section */}
          <Col md={3}>
            <div className="footer-logo">
              <img src="https://htmldemo.net/edule/eduLe/assets/images/logo.png" alt="EduLe Logo" />
            </div>
            <address className="footer-address">
              <h5>Caribbean Ct</h5>
              <p>Haymarket, Virginia (VA)</p>
              <p>Email: <a href="mailto:address@gmail.com">address@gmail.com</a></p>
              <p>Phone: (970) 262-1413</p>
            </address>
            <div className="footer-social">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-skype"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
            <div className="footer-shape-orange">
              <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-21.png" alt="Orange Dots" />
            </div>
          </Col>

          {/* Category Section */}
          <Col md={3}>
            <div className="footer-links">
              <h5>Category</h5>
              <ul>
                <li>Creative Writing</li>
                <li>Film & Video</li>
                <li>Graphic Design</li>
                <li>UI/UX Design</li>
                <li>Business Analytics</li>
                <li>Marketing</li>
              </ul>
            </div>
          </Col>

          {/* Quick Links Section */}
          <Col md={3}>
            <div className="footer-links">
              <h5>Quick Links</h5>
              <ul>
                <li>Privacy Policy</li>
                <li>Discussion</li>
                <li>Terms & Conditions</li>
                <li>Customer Support</li>
                <li>Course FAQ’s</li>
              </ul>
            </div>
          </Col>

          {/* Subscribe Section */}
          <Col md={3}>
            <div className="footer-subscribe">
              <h5>Subscribe</h5>
              <p>Lorem Ipsum has been the industry's standard dummy text.</p>
              <Form>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email here" />
                </Form.Group>
                <Button variant="success" className="subscribe-button">Subscribe Now</Button>
              </Form>
            </div>
            <div className="footer-shape-cloud">
              <img src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-22.png" alt="Cloud Shape" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
