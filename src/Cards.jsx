// import React, { useState } from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';

// const coursesData = {
//   'UI/UX Design': [
//     {
//       title: 'Data Science and Machine Learning with Python - Hands On!',
//       author: 'Jason Williams',
//       category: 'Science',
//       duration: '08 hr 15 mins',
//       lectures: '29 Lectures',
//       price: '$385.00',
//       oldPrice: '$440.00',
//       rating: '4.9',
//       imgSrc: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-01.jpg',
//     },
//     {
//       title: 'Create Amazing Color Schemes for Your UX Design Projects',
//       author: 'Pamela Foster',
//       category: 'Science',
//       duration: '08 hr 15 mins',
//       lectures: '29 Lectures',
//       price: '$420.00',
//       oldPrice: '',
//       rating: '4.9',
//       imgSrc: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-02.jpg',
//     },
//     {
//       title: 'Culture & Leadership: Strategies for a Successful Business',
//       author: 'Rose Simmons',
//       category: 'Science',
//       duration: '08 hr 15 mins',
//       lectures: '29 Lectures',
//       price: '$295.00',
//       oldPrice: '$340.00',
//       rating: '4.9',
//       imgSrc: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-03.jpg',
//     },
//     // Add more courses if needed
//   ],
//   Development: [
//     {
//       title: 'Finance Series: Learn to Budget and Calculate your Net Worth.',
//       author: 'Jason Williams',
//       category: 'Finance',
//       duration: '08 hr 15 mins',
//       lectures: '29 Lectures',
//       price: 'Free',
//       oldPrice: '',
//       rating: '4.9',
//       imgSrc: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-04.jpg',
//     },
//     {
//       title: 'Build Brand Into Marketing: Tackling the New Marketing Landscape',
//       author: 'Jason Williams',
//       category: 'Marketing',
//       duration: '08 hr 15 mins',
//       lectures: '29 Lectures',
//       price: '$136.00',
//       oldPrice: '',
//       rating: '4.9',
//       imgSrc: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-05.jpg',
//     },
//     {
//       title: 'Graphic Design: Illustrating Badges and Icons with Geometric Shapes',
//       author: 'Jason Williams',
//       category: 'Design',
//       duration: '08 hr 15 mins',
//       lectures: '29 Lectures',
//       price: '$237.00',
//       oldPrice: '',
//       rating: '4.9',
//       imgSrc: 'https://htmldemo.net/edule/eduLe/assets/images/courses/courses-06.jpg',
//     },
//     // Add more courses if needed
//   ],
//   // Add more categories like 'Data Science', 'Business', etc.
// };

// const CoursesSection = () => {
//   const [selectedCategory, setSelectedCategory] = useState('UI/UX Design');
//   const courses = coursesData[selectedCategory];

//   return (
//     <Container>
//       <h2>All Courses of Edule</h2>
//       <div className="d-flex justify-content-center my-3">
//         {Object.keys(coursesData).map((category) => (
//           <Button
//             key={category}
//             variant={selectedCategory === category ? 'success' : 'outline-success'}
//             onClick={() => setSelectedCategory(category)}
//             className="mx-2"
//           >
//             {category}
//           </Button>
//         ))}
//       </div>
//       <Row>
//         {courses.map((course, index) => (
//           <Col md={4} className="mb-4" key={index}>
//             <Card>
//               <Card.Img variant="top" src={course.imgSrc} />
//               <Card.Body>
//                 <Card.Title>{course.title}</Card.Title>
//                 <Card.Text>
//                   <small className="text-muted">{course.author}</small><br />
//                   <small className="text-muted">{course.category}</small><br />
//                   <small className="text-muted">{course.duration} · {course.lectures}</small><br />
//                   {course.oldPrice && <del>{course.oldPrice}</del>} <strong>{course.price}</strong>
//                 </Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">Rating: {course.rating} ★</small>
//               </Card.Footer>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default CoursesSection;


import React, { useState } from 'react';
import courseData from './courseData.json';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import ButtonSlider from './Test';

const CoursesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('UI/UX Design');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const renderCourses = () => {
    return courseData[selectedCategory].map((course, index) => (
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
            <Button variant="primary">Enroll Now</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h2>Courses</h2>
          <ButtonSlider
            categories={Object.keys(courseData)}
            onSelectCategory={handleCategoryChange}
          />
        </Col>
      </Row>
      <Row>
        <Carousel>
          <Carousel.Item>
            <Row>{renderCourses()}</Row>
          </Carousel.Item>
        </Carousel>
      </Row>
    </Container>
  );
};

export default CoursesSection;
