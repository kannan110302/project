import React from 'react';
import { Container, Row, Col, Image, Carousel } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <Container className="testimonial-section">
      <h3 className="section-title">Student Testimonial</h3>
      <h2 className="feedback-title">
        Feedback From <span className="highlight">Student</span>
        <Image src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-4.png" className="underscore-img" />
      </h2>

      <Carousel className="testimonial-carousel">
        <Carousel.Item>
          <Row className="testimonial-row">
            <Col md={5} className="testimonial-card">
              <div className="testimonial-content">
                <div className="image-container">
                  <Image src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg" roundedCircle className="author-img" />
                </div>
                <div className="rating">
                  <span>★★★★☆</span>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text...</p>
                <h4>Sara Alexander</h4>
                <p className="role">Product Designer, USA</p>
                <Image src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-18.png" className="arrow-img" />
              </div>
            </Col>

            <Col md={5} className="testimonial-card">
              <div className="testimonial-content">
                <div className="image-container">
                  <Image src="https://htmldemo.net/edule/eduLe/assets/images/author/author-07.jpg" roundedCircle className="author-img" />
                </div>
                <div className="rating">
                  <span>★★★★☆</span>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text...</p>
                <h4>Melissa Roberts</h4>
                <p className="role">Product Designer, USA</p>
                <Image src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-18.png" className="arrow-img" />
              </div>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row className="testimonial-row">
            <Col md={5} className="testimonial-card">
              <div className="testimonial-content">
                <div className="image-container">
                  <Image src="https://htmldemo.net/edule/eduLe/assets/images/author/author-03.jpg" roundedCircle className="author-img" />
                </div>
                <div className="rating">
                  <span>★★★★☆</span>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text...</p>
                <h4>James Smith</h4>
                <p className="role">Product Designer, USA</p>
                <Image src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-18.png" className="arrow-img" />
              </div>
            </Col>

            <Col md={5} className="testimonial-card">
              <div className="testimonial-content">
                <div className="image-container">
                  <Image src="https://htmldemo.net/edule/eduLe/assets/images/author/author-06.jpg" roundedCircle className="author-img" />
                </div>
                <div className="rating">
                  <span>★★★★☆</span>
                </div>
                <p>Lorem Ipsum has been the industry's standard dummy text...</p>
                <h4>Sara Alexander</h4>
                <p className="role">Product Designer, USA</p>
                <Image src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-18.png" className="arrow-img" />
              </div>
            </Col>
          </Row>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Testimonials;
