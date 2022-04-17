import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from '../../images/logo.png';

const Header = () => {
    return (
        // Menu area start
        <Navbar sticky="top" style={{backgroundColor:'#0d062a'}}  expand="lg">
            <Container>
                <img width="130"  src={logo} alt="" />
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Nav className="d-flex customHeader">
                        <Link to='/home'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link to='/home'>Cheak Out</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        //Menu area end
       
    );
};

export default Header;