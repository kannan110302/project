import React, { useState } from 'react';
import { Navbar, Nav, Button, Form, Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Courses from './Tips';
import CoursesSection from './Cards';
import Footer from './Footer';
import headerData from './headerData.json';
import './Contact.css'; // Importing the CSS file for styles

const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className="Contact">
            {/* Navbar */}
            <Navbar bg="light" expand="lg" className="shadow-lg sticky-top">
                <Container>
                    {/* Logo */}
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={headerData.navbar.brand.src}
                            alt={headerData.navbar.brand.alt}
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>

                    {/* Hamburger menu button */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsOpen(!isOpen)} />

                    {/* Navbar Links */}
                    <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? 'show' : ''}>
                        <Nav className="ml-auto">
                            {headerData.navbar.links.map((link, index) => (
                                <Nav.Link as={Link} key={index} to={link.href} className="text-gray-800">
                                    {link.name}
                                </Nav.Link>
                            ))}
                        </Nav>
                        <Nav className="ml-3">
                            <Button
                                as={Link}
                                to={headerData.navbar.signUpButton.href}
                                variant={headerData.navbar.signUpButton.variant}
                                className="ml-2"
                            >
                                {headerData.navbar.signUpButton.text}
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            
             <div className="hero-section2">
                <Container className="position-relative">
                   
                    <img
                        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-8.png"
                        alt="Orange Dots"
                        className="rotating-dots2 position-absolute"
                        style={{ top: '30px', left: '30px' }}
                    />

                    
                    <img
                        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-24.png"
                        alt="Green Wave"
                        className="position-absolute green-wave2"
                    />

                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="mb-4">Contact us</h1>
                            <p className="mb-4">Home // Contact</p>
                        </div>

                        <div className="col-md-6 text-center position-relative">
                            
                            <img
                                src="https://htmldemo.net/edule/eduLe/assets/images/author/author-11.jpg"
                                alt="Author"
                                className="img-fluid rounded-circle2"
                                style={{ width: '150px', height: '150px', border: '5px solid #fff', zIndex: '1', position: 'relative' }}
                            />
                        </div>
                    </div>
                </Container>
            </div> 
           


            {/* <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card className="p-4 shadow-lg border-0" style={{ maxWidth: '1200px', width: '100%' }}>
        <Row>
          
          <Col md={5} className="contact-info1 p-4 d-flex flex-column justify-content-between" style={{ backgroundColor: '#e8f5e9', borderRadius: '10px' }}>
            <div className="mb-4">
              <h6>Phone No.</h6>
              <p className="fw-bold">(88) 193 326 867</p>
            </div>
            <hr className="custom-hr1" />
            <div className="mb-4">
              <h6>Email Address</h6>
              <p className="fw-bold">edule100@gmail.com</p>
            </div>
            <hr className="custom-hr1" />
            <div className="mb-4">
              <h6>Office Address</h6>
              <p className="fw-bold">Talga, Alabama, USA</p>
            </div>
          </Col>

          <Col md={7} className="p-4">
            <h3 className="mb-4 text-center">
              Get in Touch <span style={{ color: '#4CAF50' }}>With Us</span>
            </h3>
            <Form>
              <Form.Group controlId="formName" className="mb-3">
                <Form.Control type="text" placeholder="Name" className="rounded-0" />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Control type="email" placeholder="Email" className="rounded-0" />
              </Form.Group>

              <Form.Group controlId="formSubject" className="mb-3">
                <Form.Control type="text" placeholder="Subject" className="rounded-0" />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-4">
                <Form.Control as="textarea" rows={4} placeholder="Message" className="rounded-0" />
              </Form.Group>

              <div className="text-center">
                <Button variant="success" type="submit" className="px-5 rounded-0">
                  Send Message <i className="fas fa-arrow-right"></i>
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Card>
    </Container> */}
          
           
           
            <Footer />
        </div>
        
    );
};

export default Contact;
