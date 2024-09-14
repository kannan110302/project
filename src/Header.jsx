// Header.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { SlBookOpen } from 'react-icons/sl';
import { IoStar } from 'react-icons/io5';
import headerData from './headerData.json'; // Import the JSON file

const Header = () => {
  return (
    <header
      className="header-section"
      style={{ backgroundColor: headerData.header.backgroundColor, paddingTop: '50px' }}
    >
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
            <Button
              href={headerData.header.button.href}
              variant={headerData.header.button.variant}
              size="lg"
              className="px-5"
            >
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
                  <SlBookOpen className="mb-2 book" size={24} />
                  <h5 className="mb-1">{headerData.header.stats.courses.number}</h5>
                  <p className="mb-0 text-white">{headerData.header.stats.courses.text}</p>
                </div>
              </div>
              <div className="info-box rating-info">
                <div className="content">
                  <IoStar className="star" size={24} />
                  <h5 className="mb-0 rate">{headerData.header.stats.rating.value}</h5>
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
  );
};

export default Header;
