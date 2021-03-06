
import React from 'react';
import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const NavbarWrapper = styled.div`

    .navbar {
        //box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.75);
        background-color: #f1f1f1 !important;
    }    

    .nav, .nav-link, .navbar-brand {
        color: black !important;
        opacity: 80%;

        &:hover {
            opacity: 100%;
        }
    }

`;

const NavbarHeader = () => {

    return (
        <NavbarWrapper>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="mx-auto">day planner</Navbar.Brand>
                </Container> 
            </Navbar>
        </NavbarWrapper>
    );
};

export default NavbarHeader;