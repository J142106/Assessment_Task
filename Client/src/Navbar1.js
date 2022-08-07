import React from 'react'
import { Container, Form, Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Course from './Course'
import './Navbar1.css'

const Navbar1 = () => {

    function handleSubmit(e) {
        e.preventDefault()
        var searchData = document.getElementById("searchData").value;
        console.log(searchData)
    }

        return (
            <BrowserRouter>
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Container fluid>
                            <Navbar.Brand as={Link} to={""}><h4 className="font-weight-bold">ABC Academic</h4></Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-auto my-2 my-lg-0"
                                    style={{ maxHeight: '100px' }}
                                    navbarScroll
                                >
                                    <Nav.Link as={Link} to={""}>Home</Nav.Link>
                                    <Nav.Link as={Link} to={"/student"}>Student</Nav.Link>
                                    <Nav.Link as={Link} to={"/course"}>Course</Nav.Link>
                                </Nav>

                                <Form className="d-flex">
                                    <Form.Control
                                        id="searchData"
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Search</button>
                                </Form>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Routes>
                        <Route path="" element={<Home />} />
                        <Route path="/student" element={<Student />} />
                        <Route path="/course" element={<Course />} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }

export default Navbar1