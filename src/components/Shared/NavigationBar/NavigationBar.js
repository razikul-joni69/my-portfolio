import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import topImage from "../../../images/web.png";
const NavigationBar = () => {
    return (
        <Container>
            <Navbar bg="" variant="dark" expand="md">
                <Link to="/" className="navbar-brand">
                    <img
                        alt=""
                        src={topImage}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{" "}
                    razikul.joni69
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/home">
                            Home
                        </Link>
                        <Link className="nav-link" to="/">
                            Admin
                        </Link>

                        <Link className="nav-link" to="/projects">
                            Projects
                        </Link>

                        <Link className="nav-link" to="/">
                            About Me
                        </Link>

                        <Link className="nav-link" to="/">
                            Blog
                        </Link>
                        <Link className="nav-link" to="/contact">
                            Contact Me
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;
