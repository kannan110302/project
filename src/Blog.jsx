import React, { useState } from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import Courses from './Tips';
import CoursesSection from './Cards';
import Footer from './Footer';
import headerData from './headerData.json';
import './Blog.css'; // Importing the CSS file for styles

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        
        <div className="AllBlog">
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

            
             <div className="hero-section1">
                <Container className="position-relative">
                   
                    <img
                        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-8.png"
                        alt="Orange Dots"
                        className="rotating-dots1 position-absolute"
                        style={{ top: '30px', left: '30px' }}
                    />

                    
                    <img
                        src="https://htmldemo.net/edule/eduLe/assets/images/shape/shape-24.png"
                        alt="Green Wave"
                        className="position-absolute green-wave1"
                    />

                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1 className="mb-4">My Blog</h1>
                            <p className="mb-4">Home // Blog</p>
                        </div>

                        <div className="col-md-6 text-center position-relative">
                            
                            <img
                                src="https://htmldemo.net/edule/eduLe/assets/images/author/author-11.jpg"
                                alt="Author"
                                className="img-fluid rounded-circle1"
                                style={{ width: '150px', height: '150px', border: '5px solid #fff', zIndex: '1', position: 'relative' }}
                            />
                        </div>
                    </div>
                </Container>
            </div> 

          
            <CoursesSection />
             <Banner />
             <Courses />
           
            <Footer />
        </div>
        
    );
};

export default Blog;
