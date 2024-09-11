import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaSearch, FaCertificate } from 'react-icons/fa'; // Importing icons from react-icons
import { FiSearch } from "react-icons/fi";
import { FaBook } from "react-icons/fa6";
import './Certificate.css'; // Assuming you have this CSS file for custom styles

const HowItWorks = () => {
  return (
    <Container className="how-it-works-container">
      <h2 className="course-count-text">Over 1,235+ Course</h2>
      <h3 className="how-it-works-heading">
        How It <span className="underline-text">Work?</span>
        <img 
          src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-4.png"
          alt="Underline"
          className="underline-img"
        />
      </h3>
      
      <Row className="how-it-works-row justify-content-center">
        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
          <Card className="position-relative how-it-works-card">
            <div className="position-relative icon-container">
              <FiSearch className="card-icon" />
            </div>
            <Card.Body>
              <Card.Title className="card-title">Find Your Course</Card.Title>
              <Card.Text className="card-description">
                It has survived not only centuries but also leaped into electronics.
              </Card.Text>
            </Card.Body>
            <img 
              src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-17.png"
              alt="Right Arrow"
              className="position-absolute d-none d-lg-block right-markarrow"
            />
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
          <Card className="position-relative how-it-works-card">
            <div className="position-relative icon-container">
              <FaBook className="card-icon" />
            </div>
            <Card.Body>
              <Card.Title className="card-title">Book A Seat</Card.Title>
              <Card.Text className="card-description">
                It has survived not only centuries but also leaped into electronics.
              </Card.Text>
            </Card.Body>
            <img 
              src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-17.png"
              alt="Right Arrow"
              className="position-absolute d-none d-lg-block right-markarrow"
            />
          </Card>
        </Col>

        <Col lg={4} md={6} sm={12} className="d-flex justify-content-center">
          <Card className="position-relative how-it-works-card">
            <div className="position-relative icon-container">
              <FaCertificate className="card-icon" />
            </div>
            <Card.Body>
              <Card.Title className="card-title">Get Certificate</Card.Title>
              <Card.Text className="card-description">
                It has survived not only centuries but also leaped into electronics.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWorks;



// import React from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { FaSearch, FaCertificate } from 'react-icons/fa'; // Importing icons from react-icons
// import { FiSearch } from "react-icons/fi";
// import { FaBook } from "react-icons/fa6";
// import './Certificate.css'; // Assuming you have this CSS file for custom styles

// const HowItWorks = () => {
//   return (
//     <Container className="how-it-works-container">
//       <h2 className="course-count-text">Over 1,235+ Course</h2>
//       <h3 className="how-it-works-heading">
//         How It <span className="underline-text">Work?</span>
//         <img 
//           src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-4.png"
//           alt="Underline"
//           className="underline-img"
//         />
//       </h3>
      
//       <Row className="how-it-works-row">
//         <Col lg={4} sm={12}>
//           <Card className="how-it-works-card">
//             <div className="icon-container">
//               <FiSearch className="card-icon" />
//             </div>
//             <Card.Body>
//               <Card.Title className="card-title">Find Your Course</Card.Title>
//               <Card.Text className="card-description">
//                 It has survived not only centuries but also leaped into electronics.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Right Arrow between the first and second cards */}
//         <img 
//           src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-17.png"
//           alt="Right Arrow"
//           className="position-absolute right-markarrow"
//         />

//         <Col lg={4} sm={12}>
//           <Card className="how-it-works-card">
//             <div className="icon-container">
//               <FaBook className="card-icon" />
//             </div>
//             <Card.Body>
//               <Card.Title className="card-title">Book A Seat</Card.Title>
//               <Card.Text className="card-description">
//                 It has survived not only centuries but also leaped into electronics.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>

//         {/* Right Arrow between the second and third cards */}
//         <img 
//           src="https://template.hasthemes.com/edule/eduLe/assets/images/shape/shape-17.png"
//           alt="Right Arrow"
//           className="right-arrow"
//         />

//         <Col lg={4} sm={12}>
//           <Card className="how-it-works-card">
//             <div className="icon-container">
//               <FaCertificate className="card-icon" />
//             </div>
//             <Card.Body>
//               <Card.Title className="card-title">Get Certificate</Card.Title>
//               <Card.Text className="card-description">
//                 It has survived not only centuries but also leaped into electronics.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default HowItWorks;
