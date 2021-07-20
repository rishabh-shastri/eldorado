import React from 'react';
import {Navbar,Form,Container,FormControl,Nav,Button} from 'react-bootstrap';

function NavBarCustom(props) {
    return (
        <div>
            <Navbar className="navbar-dark" bg="primary" expand="lg">
            <Container>
                <Navbar.Brand href="home">El Dorado</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2 searchwidth"
                        aria-label="Search"
                        
                    />
                    <Button variant="outline-light">Search</Button>
                    </Form>
                    <Navbar.Toggle/>
                <Nav className="ml-auto justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link href="myprofile" >My Profile</Nav.Link>
                    <Nav.Link href="logout">Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
}

export default NavBarCustom;