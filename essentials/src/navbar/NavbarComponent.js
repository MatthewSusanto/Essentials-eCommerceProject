import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import './NavbarComponent.css'
import bag from './images/bag.png'
import account from './images/account.png'
import search from './images/search.png'
import SignIn from '../account/SignIn'
import SignUp from '../account/SignUp'
import { Link } from 'react-router-dom'



class NavbarComponent extends Component {

    state = {
        showBottoms: false,
        showTops: false,
        searchShowing: false
    }

    searchButton = () => {

        this.setState({
            searchShowing: !this.state.searchShowing
        })
    }

    searchBar = () => {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" />
            </Form>)
    }






    render() {


        return (
            <div>

                <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" >

                    <Navbar.Brand href="#home">ESSENTIALS</Navbar.Brand>



                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />


                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"  >
                            <Nav.Link href="#home" >BEST SELLERS</Nav.Link>

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

                            <SignUp />

                        </Nav>

                        <Nav className="ml-auto"  >

                            {this.state.searchShowing ? this.searchBar() : null}


                            <Nav.Link onClick={this.searchButton} variant="link" > <img src={search} className="searchImg" /></Nav.Link>

                            <SignIn />










                            <Nav.Link href="#pricing" >
                                <div className="bagDiv">
                                    <img src={bag} className="bagImg" />
                                    <p className="bagItems">63</p>
                                </div>
                            </Nav.Link>

                        </Nav>














                    </Navbar.Collapse>







                </Navbar>


            </div>
        )
    }
}

export default NavbarComponent

