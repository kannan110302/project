// import React from 'react';
// import { Container, Navbar, Nav, Button, Row, Col, Card } from 'react-bootstrap';
// import { useNavigate, Link, Route, Routes } from 'react-router-dom';
// import { FaBars, FaChevronRight } from 'react-icons/fa';
// import './AdminPanel.css'; // Custom CSS for hover effects

// const Dashboard = () => {
//   return (
//     <Container fluid className="p-5">
//       <Row>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Courses</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>25</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Total Students</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>1,250</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Assignments done</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>860</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={3}>
//           <Card className="text-center" style={{ backgroundColor: '#ffa500', color: 'white' }}>
//             <Card.Body>
//               <Card.Title>Active Instructors</Card.Title>
//               <Card.Text style={{ fontSize: '2rem' }}>15</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//       <Row className="mt-4">
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Student Progress</Card.Title>
//               <Card.Text>Here you can add a progress chart showing student performance and completion rates.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Course Enrollment</Card.Title>
//               <Card.Text>Here you can add details about course enrollments, including graphs or stats.</Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const Courses = () => <h2 className="p-5">Courses Section</h2>;
// const Users = () => <h2 className="p-5">Users Section</h2>;
// const Instructors = () => <h2 className="p-5">Instructors Section</h2>;
// const Reports = () => <h2 className="p-5">Reports Section</h2>;

// const AdminPanel = () => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <Container fluid className="p-0" style={{ backgroundColor: '#f8f9fa' }}>
//       <Navbar bg="success" variant="light" expand="lg" className="px-5">
//         <Navbar.Brand style={{ color: '#00bfff' }}>
//           {/* <FaBars /> */}Admin Panel 
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
//             <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//       <Row>
//         <Col md={2} className="sidebar">
//           <Nav className="flex-column">
//             <div className="sidebar-section">
//               <FaBars className="icon" />
//               <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//             <div className="sidebar-section">
//               <FaBars className="icon" />
//               <Nav.Link as={Link} to="/admin/courses" className="text-white">Courses</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//             <div className="sidebar-section">
//               <FaBars className="icon" />
//               <Nav.Link as={Link} to="/admin/users" className="text-white">Users</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//             <div className="sidebar-section">
//               <FaBars className="icon" />
//               <Nav.Link as={Link} to="/admin/instructors" className="text-white">Instructors</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//             <div className="sidebar-section">
//               <FaBars className="icon" />
//               <Nav.Link as={Link} to="/admin/reports" className="text-white">Reports</Nav.Link>
//               <FaChevronRight className="arrow-icon" />
//             </div>
//           </Nav>
//         </Col>
//         <Col md={10}>
//           <Routes>
//             <Route path="/" element={<Dashboard />} />
//             <Route path="/courses" element={<Courses />} />
//             <Route path="/users" element={<Users />} />
//             <Route path="/instructors" element={<Instructors />} />
//             <Route path="/reports" element={<Reports />} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminPanel;


import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Table, Form } from 'react-bootstrap';
import { useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import { FaBars, FaChevronRight } from 'react-icons/fa';
import './AdminPanel.css'; // Custom CSS for hover effects

// Dashboard Component
const Dashboard = () => {
  return (
    <Container fluid className="p-5">
      <Row>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Courses</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>25</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
            <Card.Body>
              <Card.Title>Total Students</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>1,250</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
            <Card.Body>
              <Card.Title>Assignments done</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>860</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="text-center" style={{ backgroundColor: '#ffa500', color: 'white' }}>
            <Card.Body>
              <Card.Title>Active Instructors</Card.Title>
              <Card.Text style={{ fontSize: '2rem' }}>15</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Student Progress</Card.Title>
              <Card.Text>Here you can add a progress chart showing student performance and completion rates.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Course Enrollment</Card.Title>
              <Card.Text>Here you can add details about course enrollments, including graphs or stats.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

// Users Component
const Users = ({ users, setUsers }) => {
  const handleDelete = (id) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <Container className="p-5">
      <Row>
        <Col md={12}>
          <h2>Users Section</h2>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Confirm Password</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td>
                  <td>{user.confirmPassword}</td>
                  <td>
                    <Button variant="primary" as={Link} to={`/admin/users/edit/${user.id}`}>Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

// Edit User Component
const EditUser = ({ users, setUsers }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

  useEffect(() => {
    if (id) {
      const existingUser = users.find(user => user.id === parseInt(id));
      if (existingUser) {
        setUser(existingUser);
      }
    }
  }, [id, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // Edit existing user
      const updatedUsers = users.map(u => (u.id === parseInt(id) ? user : u));
      setUsers(updatedUsers);
    } else {
      // Add new user
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
    navigate('/admin/users');
  };

  return (
    <Container className="p-5">
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            value={user.confirmPassword}
            onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
          />
        </Form.Group>
        <Button variant="success" type="submit" className="mt-3">
          {id ? 'Update User' : 'Add User'}
        </Button>
      </Form>
    </Container>
  );
};

// AdminPanel Component
const AdminPanel = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: 'password123', confirmPassword: 'password123' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', password: 'password456', confirmPassword: 'password456' }
  ]);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login'); // Redirect to login page
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar bg="success" variant="light" expand="lg" className="px-5">
        <Navbar.Brand style={{ color: '#00bfff' }}>
          Admin Panel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#" style={{ color: '#ffffff' }}>Demo User</Nav.Link>
            <Button onClick={handleLogout} variant="outline-light" className="ms-3">Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Row>
        <Col md={2} className="sidebar">
          <Nav className="flex-column">
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin" className="text-white">Dashboard</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/courses" className="text-white">Courses</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/users" className="text-white">Users</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/instructors" className="text-white">Instructors</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
            <div className="sidebar-section">
              <FaBars className="icon" />
              <Nav.Link as={Link} to="/admin/reports" className="text-white">Reports</Nav.Link>
              <FaChevronRight className="arrow-icon" />
            </div>
          </Nav>
        </Col>
        <Col md={10}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<h2 className="p-5">Courses Section</h2>} />
            <Route path="/users" element={<Users users={users} setUsers={setUsers} />} />
            <Route path="/users/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/instructors" element={<h2 className="p-5">Instructors Section</h2>} />
            <Route path="/reports" element={<h2 className="p-5">Reports Section</h2>} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
