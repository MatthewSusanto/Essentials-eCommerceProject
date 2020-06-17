import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import './NavbarComponent.css'

class NavbarComponent extends Component {

    state = {
        showBottoms: false,
        showTops: false
    }




    render() {
        return (
            <div>

                <Navbar collapseOnSelect bg="dark" variant="dark" expand="md" fixed="top" >
                    <Navbar.Brand href="#home">ESSENTIALS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">BEST SELLERS</Nav.Link>

                            <NavDropdown title="TOPS" id="collasible-nav-dropdown" show={this.state.showTops}
                                onMouseEnter={() => this.setState({ showTops: true })}
                                onMouseLeave={() => this.setState({ showTops: false })} >
                                {/* ADDED SHOW PROPS, I CAN'T FIND IT ANYWHERE ON THE DOCUMENTATION, I FOUND THE SOLUTION ON STACKOVERFLOW */}

                                <NavDropdown.Item href="#action/3.1">BAMBOO TEES</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">BAMBOO V-NECKS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">HENLEYS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">CREW-NECK SWEATER</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">JACKETS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">HOODIES</NavDropdown.Item>
                            </NavDropdown>


                            <NavDropdown title="BOTTOMS" id="collasible-nav-dropdown" show={this.state.showBottoms}
                                onMouseEnter={() => this.setState({ showBottoms: true })}
                                onMouseLeave={() => this.setState({ showBottoms: false })} >
                                {/* ADDED SHOW PROPS, I CAN'T FIND IT ANYWHERE ON THE DOCUMENTATION, I FOUND THE SOLUTION ON STACKOVERFLOW */}

                                <NavDropdown.Item href="#action/3.1">CARGO PANTS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">SWEAT PANTS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">CHINOS</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="#pricing">UNDERWEAR</Nav.Link>
                            <Nav.Link href="#pricing">SALE</Nav.Link>

                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>


            </div>
        )
    }
}

export default NavbarComponent

