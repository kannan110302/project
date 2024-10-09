

import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Table, Form, Dropdown } from 'react-bootstrap';
import { useNavigate, Link, Route, Routes, useParams } from 'react-router-dom';
import { FaBars, FaChevronRight } from 'react-icons/fa';
import './AdminPanel.css';
import axios from 'axios'; // Axios for API requests
import DatePicker from 'react-datepicker'; // Add date picker
import 'react-datepicker/dist/react-datepicker.css'; // Add date picker styles
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // For tables in PDF
import { FaFilePdf, FaFileExcel, FaFileCsv } from 'react-icons/fa'; // Icons for download options
import * as XLSX from 'xlsx'; // For Excel/CSV downloads

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


const Users = ({ users, setUsers }) => {
  const [selectedUsers, setSelectedUsers] = useState([]); // State to track selected users
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [usersToShow, setUsersToShow] = useState(5); // Default value is 5
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [fromDate, setFromDate] = useState(null); // State for 'From' date picker
  const [toDate, setToDate] = useState(null); // State for 'To' date picker

  // useEffect(() => {
  //   console.log('Users:', users); // Add this line
  // }, [users]);


   // Filtered users based on search and date range
   const filteredUsers = users
   .filter((user) => {
     const matchesSearchTerm =
       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
       user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
       user.password.toLowerCase().includes(searchTerm.toLowerCase());

     const registrationDate = new Date(user.registrationDate);
     const withinDateRange =
       (!fromDate || registrationDate >= fromDate) &&
       (!toDate || registrationDate <= toDate);

     return matchesSearchTerm && withinDateRange;
   });

  // Dropdown options to select how many users to show
  const handleUsersToShowChange = (e) => {
    setUsersToShow(parseInt(e.target.value, 10));
  };

   // Calculate pagination details
  const totalUsers = filteredUsers.length;
  const totalPages = Math.ceil(totalUsers / usersToShow); // Use usersToShow for pagination
  const indexOfLastUser = currentPage * usersToShow; // Adjust for usersToShow
  const indexOfFirstUser = indexOfLastUser - usersToShow; // Adjust for usersToShow
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const exportToPDF = () => {
    console.log('Selected Users:', selectedUsers); // Add this line
    if (selectedUsers.length === 0) {
        alert('No user data available for export');
        return;
    }

    const doc = new jsPDF();
    doc.text('User Details', 20, 10);

    const tableColumn = ["Name", "Email", "Phone", "Password", "Registration Date"];
    const tableRows = selectedUsers.map((id) => {
      const user = users.find(user => user._id === id);
      if (!user) return null; // Handle if user is not found
      return [
        user.name,
        user.email,
        user.phone,
        user.password,  // Include the password field if necessary
        new Date(user.registrationDate).toLocaleDateString(),
      ];
    }).filter(Boolean); // Filter out any null entries

    if (tableRows.length === 0) {
      alert('No user data available for export'); // This check is added
      return;
    }

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save('users.pdf');
};

  // Export selected users to Excel
  const exportToExcel = () => {
    const data = selectedUsers.map((id) => {
      const user = users.find(user => user._id === id);
      if (!user) return null;
      return {
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        Password: user.password, 
        RegistrationDate: new Date(user.registrationDate).toLocaleDateString(),
      };
    }).filter(Boolean); // Remove null entries

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
    XLSX.writeFile(workbook, "users.xlsx");
  };

  // Export selected users to CSV
  const exportToCSV = () => {
    const data = selectedUsers.map((id) => {
      const user = users.find(user => user._id === id);
      if (!user) return null;
      return {
        Name: user.name,
        Email: user.email,
        Phone: user.phone,
        Password: user.password,  
        RegistrationDate: new Date(user.registrationDate).toLocaleDateString(),
      };
    }).filter(Boolean);

    const worksheet = XLSX.utils.json_to_sheet(data);
    const csv = XLSX.utils.sheet_to_csv(worksheet);
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'users.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Handle individual checkbox change
  const handleCheckboxChange = (id) => {
    setSelectedUsers(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(selectedId => selectedId !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  };
  

  // Handle master checkbox change
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedUsers(currentUsers.map((user) => user._id)); // Select all users on current page
    } else {
      setSelectedUsers([]); // Deselect all users
    }
  };

  // Handle delete button for selected users
  const handleDeleteSelected = async () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete the selected users?'
    );
    if (!confirmed) return; // Exit if the user cancels

    try {
      await Promise.all(
        selectedUsers.map((id) =>
          axios.delete(`http://localhost:5000/api/users/${id}`)
        )
      );
      const updatedUsers = users.filter(
        (user) => !selectedUsers.includes(user._id)
      );
      setUsers(updatedUsers);
      setSelectedUsers([]); // Clear selected users after deletion

      // Adjust current page if necessary
      if (currentPage > Math.ceil(updatedUsers.length / usersToShow)) {

        setCurrentPage(Math.max(currentPage - 1, 1));
      }
    } catch (error) {
      console.error('Error deleting users:', error.response?.data || error.message);
      alert('Failed to delete selected users. Please try again.');
    }
  };

  // Handle individual delete
  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this user?');
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      const updatedUsers = users.filter((user) => user._id !== id);
      setUsers(updatedUsers);

      // Adjust current page if necessary
      if (currentPage > Math.ceil(updatedUsers.length / usersToShow)) {

        setCurrentPage(Math.max(currentPage - 1, 1));
      }
    } catch (error) {
      console.error('Error deleting user:', error.response?.data || error.message);
      alert('Failed to delete user. Please try again.');
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Handle page change
  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <Container className="p-5">
      <Row className="mb-3">
        <Col md={6}>
          <h2>Users Section</h2>
        </Col>

        <Col md={6} className="d-flex justify-content-end">
          {/* Download icons for PDF, Excel, and CSV */}
          <FaFilePdf
            onClick={exportToPDF}
            size={30}
            style={{ marginRight: '10px', cursor: 'pointer' }}
          />
          <FaFileExcel
            onClick={exportToExcel}
            size={30}
            style={{ marginRight: '10px', cursor: 'pointer' }}
          />
          <FaFileCsv
            onClick={exportToCSV}
            size={30}
            style={{ cursor: 'pointer' }}
          />
        </Col>

        <Col md={6} className="d-flex justify-content-end">
          <Button
            variant="danger"
            onClick={handleDeleteSelected}
            disabled={selectedUsers.length === 0} // Disable if no users are selected
          >
            Delete Selected
          </Button>
        </Col>
      </Row>
        
         {/* Dropdown for selecting number of users to show */}
      <Row className="mb-3">
        <Col md={12}>
          <Form.Group>
            <Form.Label>Show number of users:</Form.Label>
            <Form.Control as="select" onChange={handleUsersToShowChange} value={usersToShow}>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={40}>40</option>
              <option value={50}>50</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={6}>
          {/* Search Box */}
          <Form.Control
            type="text"
            placeholder="Search by name, email, phone, password, confirm password"
            value={searchTerm}
            onChange={handleSearchChange} // Update search term on change
          />
        </Col>
        
        <Col md={3}>
          {/* From Date Picker */}
          <DatePicker
            selected={fromDate}
            onChange={(date) => setFromDate(date)}
            placeholderText="From Date"
            isClearable
            className="form-control"
          />
        </Col>
        <Col md={3}>
          {/* To Date Picker */}
          <DatePicker
            selected={toDate}
            onChange={(date) => setToDate(date)}
            placeholderText="To Date"
            isClearable
            className="form-control"
          />
        </Col>
      </Row>

      
      <Row>
        <Col md={12}>
        <div style={{ overflowX: 'auto' }}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <Form.Check
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={
                      currentUsers.length > 0 &&
                      selectedUsers.length === currentUsers.length
                    } // Select all if all users on current page are selected
                  />
                </th>
                <th>Profile</th> {/* New column */}
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                {/* <th>Confirm Password</th> */}
                <th>Registration Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.length > 0 ? (
                currentUsers.map((user) => (
                  <tr key={user._id}>
                    <td>
                      <Form.Check
                        type="checkbox"
                        checked={selectedUsers.includes(user._id)} // Check if the user is selected
                        onChange={() => handleCheckboxChange(user._id)}
                      />
                    </td>
                    <td>
          <img
            src={user.image}  
            alt="profile"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          /></td>
                    <td>{user.name}</td> 
                    <td>{user.email}</td>
                    <td>{user.phone}</td>  
                    <td>{user.password}</td>
                    {/* <td>{user.confirmPassword}</td> */}
                    <td>{user.registrationDate ? new Date(user.registrationDate).toLocaleDateString() : 'N/A'}</td>

                    <td>
                      <Button variant="info" as={Link} to={`/admin/users/view/${user._id}`}>
                        View
                      </Button>{' '}
                      <Button variant="primary" as={Link} to={`/admin/users/edit/${user._id}`}>
                        Edit
                      </Button>{' '}
                      <Button variant="danger" onClick={() => handleDelete(user._id)}>
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
          </div>
        </Col>
      </Row>

      {/* Pagination Section */}
      {totalUsers > usersToShow && (

        <Row className="align-items-center">
          <Col md={6}>
            <p>
              Showing {Math.min(indexOfFirstUser + 1, totalUsers)} to {Math.min(indexOfLastUser, totalUsers)} of {totalUsers} users
            </p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <Button
              variant="secondary"
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className="me-2"
            >
              Previous
            </Button>
            <Button
              variant="secondary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

const EditUser = ({ users, setUsers, viewMode = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    registrationDate: new Date(),
    image: '' // For storing selected file
  });
  const [imagePreview, setImagePreview] = useState(''); // Preview image in form
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/users/${id}`);
          const registrationDate = response.data.registrationDate
            ? new Date(response.data.registrationDate)
            : new Date();
          setUser({ ...response.data, registrationDate });
        } catch (error) {
          setError("Failed to load user data. Please try again.");
        } finally {
          setIsLoading(false);
        }
      };
      fetchUser();
    } else {
      setIsLoading(false);
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (viewMode) return;

    const formData = new FormData();
    for (const key in user) {
      formData.append(key, user[key]);
    }

    try {
      if (id) {
        const response = await axios.put(`http://localhost:5000/api/users/${id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        const updatedUsers = users.map(u => (u._id === id ? response.data : u));
        setUsers(updatedUsers);
      } else {
        const response = await axios.post('http://localhost:5000/api/users', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setUsers([response.data, ...users]);
      }
      navigate('/admin/users/manage');
    } catch (error) {
      setError("Failed to save user data. Please try again.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // const handleFileChange = (e) => {
  //   setUser({ ...user, profileImage: e.target.files[0] }); // Set selected file
  // };

  // Image preview logic
const handleImageUpload = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result); // Preview image in form
      setUser({ ...user, image: reader.result }); // Send base64 data
    };
    reader.readAsDataURL(file);
  }
};

  const handleDateChange = (date) => {
    setUser({ ...user, registrationDate: date });
  };

  const handleBack = () => {
    navigate('/admin/users/manage');
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container className="p-5">
      <h2>{viewMode ? 'View User' : id ? 'Edit User' : 'Add User'}</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            required
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            disabled={viewMode}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Registration Date</Form.Label>
          <DatePicker
            selected={user.registrationDate}
            onChange={handleDateChange}
            disabled={viewMode}
            required
          />
        </Form.Group>
        <Form.Group className="name">
  <Form.Label>Upload Image</Form.Label>
  <Form.Control
    type="file"
    accept="image/*"
    onChange={handleImageUpload}
    className="nametext"
  />
  {user.image && (
    <div className="mt-3">
      // Render the image in the table
      <img src={user.image} alt="User Image" style={{ width: '50px', height: '50px' }} />
    </div>
  )}
</Form.Group>
        {viewMode && (
          <Button variant="secondary" className="mt-3" onClick={handleBack}>
            Back to Manage Users
          </Button>
        )}
        {!viewMode && (
          <Button variant="success" type="submit" className="mt-3">
            {id ? 'Update User' : 'Add User'}
          </Button>
        )}
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
              <Nav.Link as={Link} to="/admin/dashboard" className="text-white">Dashboard</Nav.Link>
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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users/manage" element={<Users users={users} setUsers={setUsers} />} />
            <Route path="/users/add" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/edit/:id" element={<EditUser users={users} setUsers={setUsers} />} />
            <Route path="/users/view/:id" element={<EditUser users={users} setUsers={setUsers} viewMode={true} />} />
            {/* Add other routes here as needed */}
          </Routes>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPanel;
