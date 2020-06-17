import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import './NavbarComponent.css'

class NavbarComponent extends Component {

    state = {
        isOpen: false
    }


    handleOpen = () => {
        this.setState({ isOpen: true })
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }


    render() {
        return (
            <div>



                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">ESSENTIALS</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">BEST SELLERS</Nav.Link>



                        <NavDropdown title="TOPS" id="collasible-nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1">BAMBOO TEES</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">BAMBOO V-NECKS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">HENLEYS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">CREW-NECK SWEATER</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">JACKETS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">HOODIES</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="BOTTOMS" id="collasible-nav-dropdown" onMouseEnter={this.handleOpen}
                            onMouseLeave={this.handleClose}
                            open={this.state.isOpen}>
                            <NavDropdown.Item href="#action/3.1">CARGO PANTS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">SWEAT PANTS</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">CHINOS</NavDropdown.Item>
                        </NavDropdown>

                        <Nav.Link href="#pricing">UNDERWEAR</Nav.Link>
                        <Nav.Link href="#pricing">SALE</Nav.Link>


                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

export default NavbarComponent
