import React, { useState } from 'react';
import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { FaBook, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import headerData from './headerData.json'; // Import the JSON file

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Home">
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
          <Navbar.Collapse id="basic-navbar-nav" className={isOpen ? "show" : ""}>
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

      <header className="header-section" style={{ backgroundColor: headerData.header.backgroundColor, paddingTop: '50px' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-center text-md-start">
            <img
                  src={headerData.header.images.dots}
                  alt="dots"
                  className="position-absolute dots-shape"
                />
              <h1 className="mb-4">
                {headerData.header.title.split(',').map((line, index) => (
                  <React.Fragment key={index}>
                    {line.trim()}
                    {index !== headerData.header.title.split(',').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
              <p className="mb-4">{headerData.header.subtitle}</p>
              <Button href={headerData.header.button.href} variant={headerData.header.button.variant} size="lg" className="px-5">
                {headerData.header.button.text}
              </Button>
              <img
                src={headerData.header.images.underline}
                alt="underline"
                style={{ marginLeft: '20px', verticalAlign: 'middle' }}
              />
            </Col>
            <Col md={6} className="text-center position-relative">
              <div className="position-relative">
                <img
                  src={headerData.header.images.lady}
                  alt="lady"
                  className="img-fluid lady-image"
                />

                {/* Courses and Rating Divs */}
                <div className="info-box courses-info">
                  <div className="content">
                    <FaBook className="mb-2" size={24} />
                    <h5 className="mb-1">{headerData.header.stats.courses.number}</h5>
                    <p className="mb-0 text-white">{headerData.header.stats.courses.text}</p>
                  </div>
                </div>
                <div className="info-box rating-info">
                  <div className="content">
                    <FaStar className="mb-2" size={24} />
                    <h5 className="mb-1">{headerData.header.stats.rating.value}</h5>
                    <p className="mb-0">{headerData.header.stats.rating.text}</p>
                  </div>
                </div>

                {/* Arrows and Dots */}
                <img
                  src={headerData.header.images.yellowArrow}
                  alt="yellow arrow"
                  className="position-absolute yellow-arrow"
                />
                <img
                  src={headerData.header.images.greenArrow}
                  alt="green arrow"
                  className="position-absolute green-arrow"
                />
                
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default CustomNavbar;
