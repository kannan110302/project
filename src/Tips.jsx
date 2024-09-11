// import React from 'react';
// import './Tips.css'; // Import your styles

// const courses = [
//   {
//     image: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-03.jpg',
//     title: 'React for Beginners',
//     instructor: 'David Wilson',
//     duration: '08 hr 00 mins',
//     lectures: '30 Lectures',
//     price: '$320.00',
//     rating: '4.8',
//   },
//   {
//     image: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg',
//     title: 'Node.js and Express',
//     instructor: 'Sarah Thompson',
//     duration: '09 hr 15 mins',
//     lectures: '32 Lectures',
//     price: '$385.00',
//     rating: '4.7',
//   },
//   {
//     image: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-02.jpg',
//     title: 'Mastering JavaScript',
//     instructor: 'Mark Taylor',
//     duration: '10 hr 45 mins',
//     lectures: '38 Lectures',
//     price: '$400.00',
//     rating: '4.8',
//   },
// ];

// const CourseCards = () => {
//   return (
//     <div className="course-cards-container">
//       {courses.map((course, index) => (
//         <div key={index} className="course-card">
//           <img src={course.image} alt={course.title} className="course-image" />
//           <div className="course-content">
//             <h3>{course.title}</h3>
//             <p><strong>Instructor:</strong> {course.instructor}</p>
//             <p><strong>Duration:</strong> {course.duration}</p>
//             <p><strong>Lectures:</strong> {course.lectures}</p>
//             <p><strong>Price:</strong> {course.price}</p>
//             <p><strong>Rating:</strong> {course.rating}</p>
//             <button className="enroll-button">Enroll Now</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CourseCards;
import React from 'react';
import TipsData from './TipsData.json'; // Your JSON file
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import './Tips.css';

const Courses = () => {
  // We directly access the "Business" category from the JSON file.
  const businessCourses = TipsData["Business"];

  const renderCourses = () => {
    return businessCourses.map((course, index) => (
      <Col key={index} md={4} className="mb-4">
        <Card>
          <Card.Img variant="top" src={course.image} />
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Card.Text>
              <strong>Instructor:</strong> {course.instructor}
            </Card.Text>
            <Card.Text>
              <strong>Duration:</strong> {course.duration}
            </Card.Text>
            <Card.Text>
              <strong>Lectures:</strong> {course.lectures}
            </Card.Text>
            <Card.Text>
              <strong>Price:</strong> {course.price}
              {course.discountedPrice && (
                <span className="text-muted" style={{ textDecoration: 'line-through', marginLeft: '10px' }}>
                  {course.discountedPrice}
                </span>
              )}
            </Card.Text>
            <Card.Text>
              <strong>Rating:</strong> {course.rating}
            </Card.Text>
            <Button variant="success">Enroll Now</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      {/* Add your title and description here */}
      <div className="text-center mb-5">
        <h3 className="page-title">Latest News</h3>
        <h2 className="highlight-title">
          Educational Tips & <span className="highlighter">Tricks</span>
          {/* <Image src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-4.png" className="underscorrer-img" /> */}
        </h2>
      </div>

      <Row>
        {renderCourses()}
      </Row>
    </Container>
  );
};

export default Courses;

