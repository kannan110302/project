import React, { useState } from 'react';
import { Carousel, Button, Container, Row, Col } from 'react-bootstrap';
import './ButtonSlider.css';

const ButtonSlider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    if (selectedIndex >= 0 && selectedIndex < Math.ceil(buttons.length / itemsPerSlide)) {
      setIndex(selectedIndex);
    }
  };

  const buttons = [
    'Button 1',
    'Button 2',
    'Button 3',
    'Button 4',
    'Button 5',
    'Button 6',
    'Button 7',
    'Button 8',
  ];

  const itemsPerSlide = 4;

  return (
    <Container className="button-slider-container">
      <div className="arrow-container">
        <div className="arrow-left">
          <span
            className="carousel-control-prev-icon custom-icon"
            onClick={() => handleSelect(index - 1)}
          />
        </div>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          controls={false}
          indicators={false}
          interval={null}
          wrap={false}
          slide={true}
        >
          {[...Array(Math.ceil(buttons.length / itemsPerSlide))].map((_, i) => (
            <Carousel.Item key={i}>
              <Row className="justify-content-center">
                {buttons.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide).map((buttonText, j) => (
                  <Col key={j} className="text-center">
                    <div className="button-wrapper">
                      <Button variant="success" className="slider-button">{buttonText}</Button>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="arrow-right">
          <span
            className="carousel-control-next-icon custom-icon"
            onClick={() => handleSelect(index + 1)}
          />
        </div>
      </div>
    </Container>
  );
};

export default ButtonSlider;
