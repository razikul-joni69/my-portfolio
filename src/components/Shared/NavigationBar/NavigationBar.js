import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import topImage from "../../../images/web.png";
const NavigationBar = () => {
    return (
        <Container>
            <Navbar bg="" variant="dark" expand="md">
                <Navbar.Brand>
                    <img
                        alt=""
                        src={topImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    razikul.joni69
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/home">
                            Home
                        </Link>
                        <Link className="nav-link" to="/admin">
                            Admin
                        </Link>

                        <Link className="nav-link" to="/projects">
                            Projects
                        </Link>

                        <Link className="nav-link" to="about me">
                            About Me
                        </Link>

                        <Link className="nav-link" to="blog">
                            Blog
                        </Link>
                        <Link className="nav-link" to="/contact">
                            Contact Us
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
