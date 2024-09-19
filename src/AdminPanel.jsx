





// import React, { useState, useEffect } from 'react';
// import { Container, Navbar, Nav, Button, Row, Col, Card, Table, Form, Dropdown } from 'react-bootstrap';
// import { useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
// import { FaBars, FaChevronRight } from 'react-icons/fa';
// import './AdminPanel.css'; // Custom CSS for hover effects

// // Dashboard Component
// const Dashboard = () => {
//     return (
//         <Container fluid className="p-5">
//           <Row>
//             <Col md={3}>
//               <Card className="text-center" style={{ backgroundColor: '#00a86b', color: 'white' }}>
//                 <Card.Body>
//                   <Card.Title>Total Courses</Card.Title>
//                   <Card.Text style={{ fontSize: '2rem' }}>25</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="text-center" style={{ backgroundColor: '#00bfff', color: 'white' }}>
//                 <Card.Body>
//                   <Card.Title>Total Students</Card.Title>
//                   <Card.Text style={{ fontSize: '2rem' }}>1,250</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="text-center" style={{ backgroundColor: '#ff6347', color: 'white' }}>
//                 <Card.Body>
//                   <Card.Title>Assignments done</Card.Title>
//                   <Card.Text style={{ fontSize: '2rem' }}>860</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={3}>
//               <Card className="text-center" style={{ backgroundColor: '#ffa500', color: 'white' }}>
//                 <Card.Body>
//                   <Card.Title>Active Instructors</Card.Title>
//                   <Card.Text style={{ fontSize: '2rem' }}>15</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//           <Row className="mt-4">
//             <Col md={6}>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>Student Progress</Card.Title>
//                   <Card.Text>Here you can add a progress chart showing student performance and completion rates.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={6}>
//               <Card>
//                 <Card.Body>
//                   <Card.Title>Course Enrollment</Card.Title>
//                   <Card.Text>Here you can add details about course enrollments, including graphs or stats.</Card.Text>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       );
//     };

// // Users Component
// const Users = ({ users, setUsers }) => {
//   const handleDelete = (id) => {
//     const updatedUsers = users.filter(user => user.id !== id);
//     setUsers(updatedUsers);
//   };

//   return (
//     <Container className="p-5">
//       <Row>
//         <Col md={12}>
//           <h2>Users Section</h2>
//           <Table striped bordered hover>
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Phone Number</th>
//                 <th>Password</th>
//                 <th>Confirm Password</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map(user => (
//                 <tr key={user.id}>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.password}</td>
//                   <td>{user.confirmPassword}</td>
//                   <td>
//                     <Button variant="primary" as={Link} to={`/admin/users/edit/${user.id}`}>Edit</Button>{' '}
//                     <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </Table>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// // EditUser Component
// const EditUser = ({ users, setUsers }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

//   useEffect(() => {
//     if (id) {
//       const existingUser = users.find(user => user.id === parseInt(id));
//       if (existingUser) {
//         setUser(existingUser);
//       }
//     }
//   }, [id, users]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (id) {
//       // Edit existing user
//       const updatedUsers = users.map(u => (u.id === parseInt(id) ? user : u));
//       setUsers(updatedUsers);
//     } else {
//       // Add new user
//       setUsers([...users, { ...user, id: users.length + 1 }]);
//     }
//     navigate('/admin/users/manage');
//   };

//   return (
//     <Container className="p-5">
//       <h2>{id ? 'Edit User' : 'Add User'}</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control
//             type="text"
//             value={user.name}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Phone</Form.Label>
//           <Form.Control
//             type="text"
//             value={user.phone}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//           />
//         </Form.Group>
//         <Form.Group>
//           <Form.Label>Confirm Password</Form.Label>
//           <Form.Control
//             type="password"
//             value={user.confirmPassword}
//             onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
//           />
//         </Form.Group>
//         <Button variant="success" type="submit" className="mt-3">
//           {id ? 'Update User' : 'Add User'}
//         </Button>
//       </Form>
//     </Container>
//   );
// };

// // AdminPanel Component
// const AdminPanel = () => {
//   const [users, setUsers] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', password: 'password123', confirmPassword: 'password123' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', password: 'password456', confirmPassword: 'password456' }
//   ]);

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     navigate('/login'); // Redirect to login page
//   };

//   return (
//     <Container fluid className="p-0" style={{ backgroundColor: '#f8f9fa' }}>
//       <Navbar bg="success" variant="light" expand="lg" className="px-5">
//         <Navbar.Brand style={{ color: '#00bfff' }}>
//           Admin Panel
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
//               <Dropdown>
//                 <Dropdown.Toggle className="text-white dropdown-toggle">
//                   Users
//                 </Dropdown.Toggle>
//                 <Dropdown.Menu>
//                   <Dropdown.Item as={Link} to="/admin/users/manage">Manage Users</Dropdown.Item>
//                   <Dropdown.Item as={Link} to="/admin/users/add">Add User</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
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
//             <Route path="/users/manage" element={<Users users={users} setUsers={setUsers} />} />
//             <Route path="/users/add" element={<EditUser users={users} setUsers={setUsers} />} />
//             <Route path="/users/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
//             <Route path="/courses" element={<h2 className="p-5">Courses Section</h2>} />
//             <Route path="/instructors" element={<h2 className="p-5">Instructors Section</h2>} />
//             <Route path="/reports" element={<h2 className="p-5">Reports Section</h2>} />
//           </Routes>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default AdminPanel;




import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Table, Form, Dropdown } from 'react-bootstrap';
import { useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import { FaBars, FaChevronRight } from 'react-icons/fa';
import './AdminPanel.css';
import axios from 'axios'; // Axios for API requests

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
    </Container>
  );
};

// Users Component
// Users Component
const Users = ({ users, setUsers }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      const updatedUsers = users.filter(user => user._id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Error deleting user:", error.response?.data || error.message);
    }
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
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.password}</td> {/* Display password */}
                  <td>{user.confirmPassword}</td> {/* Display confirmPassword */}
                  <td>
                    <Button variant="primary" as={Link} to={`/admin/users/edit/${user._id}`}>Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(user._id)}>Delete</Button>
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


// EditUser Component
// EditUser Component
const EditUser = ({ users, setUsers }) => {
  const { id } = useParams(); // Get the ID from the URL
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });
  const [isLoading, setIsLoading] = useState(true); // State to track loading
  const [error, setError] = useState(null); // State to track errors

  // Fetch the user data when the component is mounted, if we are editing a user
  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/users/${id}`);
          console.log("User data fetched:", response.data); // Debugging
          setUser(response.data); // Set the user data in the state
        } catch (error) {
          console.error("Error fetching user:", error.response?.data || error.message);
          setError("Failed to load user data. Please try again."); // Set error state
        } finally {
          setIsLoading(false); // Set loading to false after the request
        }
      };
      fetchUser();
    } else {
      setIsLoading(false); // If not editing, we are adding a new user, so we can stop loading immediately
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        const response = await axios.put(`http://localhost:5000/api/users/${id}`, user);
        const updatedUsers = users.map(u => (u._id === id ? response.data : u));
        setUsers(updatedUsers); // Update the user list in the parent component
      } else {
        const response = await axios.post('http://localhost:5000/api/users', user);
        setUsers([...users, response.data]); // Add a new user to the list
      }
      navigate('/admin/users/manage'); // Navigate back to the manage users page
    } catch (error) {
      console.error("Error saving user:", error.response?.data || error.message);
      setError("Failed to save user data. Please try again."); // Set error state
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message while fetching the user data
  }

  if (error) {
    return <div>{error}</div>; // Display any error that occurs during data fetching
  }

  return (
    <Container className="p-5">
      <h2>{id ? 'Edit User' : 'Add User'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
      }
    };
    fetchUsers();
  }, []);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar bg="success" variant="light" expand="lg" className="px-5">
        <Navbar.Brand style={{ color: '#00bfff' }}>Admin Panel</Navbar.Brand>
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
              <Dropdown>
                <Dropdown.Toggle className="text-white dropdown-toggle">Users</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/admin/users/manage">Manage Users</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/admin/users/add">Add User</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <FaChevronRight className="arrow-icon" />
            </div>
          </Nav>
        </Col>
        <Col md={10} className="p-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users/manage" element={<Users users={users} setUsers={setUsers} />} />
            <Route path="/users/add" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
