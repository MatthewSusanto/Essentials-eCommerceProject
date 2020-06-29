import React, { Component } from 'react'
import { Navbar, Nav, FormControl, Button, Form, NavDropdown } from 'react-bootstrap'
import './NavbarComponent.css'
import bag from './images/bag.png'
import account from './images/account.png'
import search from './images/search.png'
import SignIn from '../account/SignIn'

import { Link, withRouter } from 'react-router-dom'
import CartModal from '../cart/CartModal'
import { persistor } from '../redux/store'



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

    purge = () => {
        persistor.purge()
        console.log("Factory reset performed.")
    }

    handleLink = (input) => {
        this.props.history.push('/collections/' + input)
        this.props.history.go();
    }







    render() {


        return (
            <div>

                <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg" fixed="top" >

                    <Link to='/'><Navbar.Brand>ESSENTIALS</Navbar.Brand> </Link>



                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />


                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"  >

                            <Nav.Link href="/collections/bestsellers" >BEST SELLERS</Nav.Link>


                            <NavDropdown href="/" title="TOPS" id="collasible-nav-dropdown" show={this.state.showTops}
                                onMouseEnter={() => this.setState({ showTops: true })}
                                onMouseLeave={() => this.setState({ showTops: false })}
                                onClick={() => this.handleLink("tops")} >
                                {/* ADDED SHOW PROPS, I CAN'T FIND IT ANYWHERE ON THE DOCUMENTATION, I FOUND THE SOLUTION ON STACKOVERFLOW */}

                                <NavDropdown.Item href="/collections/tops/tees">BAMBOO TEES</NavDropdown.Item>
                                <NavDropdown.Item href="/collections/tops/vnecks">BAMBOO V-NECKS</NavDropdown.Item>
                                <NavDropdown.Item href="/collections/tops/henleys">HENLEYS</NavDropdown.Item>
                                <NavDropdown.Item href="/collections/tops/hoodies">HOODIES</NavDropdown.Item>

                            </NavDropdown>




                            <NavDropdown title="BOTTOMS" id="collasible-nav-dropdown" show={this.state.showBottoms}
                                onMouseEnter={() => this.setState({ showBottoms: true })}
                                onMouseLeave={() => this.setState({ showBottoms: false })}
                                onClick={() => this.handleLink("bottoms")} >
                                {/* ADDED SHOW PROPS, I CAN'T FIND IT ANYWHERE ON THE DOCUMENTATION, I FOUND THE SOLUTION ON STACKOVERFLOW */}

                                <NavDropdown.Item href="/collections/bottoms/cargopants">CARGO PANTS</NavDropdown.Item>
                                <NavDropdown.Item href="/collections/bottoms/sweatpants">SWEAT PANTS</NavDropdown.Item>
                                <NavDropdown.Item href="/collections/bottoms/chinos">CHINOS</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/collections/underwear">UNDERWEAR</Nav.Link>
                            <Nav.Link href="/collections/sale">SALE</Nav.Link>
                            <Nav.Link href="#pricing" onClick={() => this.purge()}>Purge</Nav.Link>


                        </Nav>

                        <Nav className="ml-auto"  >

                            {this.state.searchShowing ? this.searchBar() : null}


                            <Nav.Link onClick={this.searchButton} variant="link" > <img src={search} className="searchImg" /></Nav.Link>

                            <SignIn />










                            <Nav.Link >
                                <CartModal />

                            </Nav.Link>

                        </Nav>














                    </Navbar.Collapse>







                </Navbar>


            </div>
        )
    }
}

export default withRouter(NavbarComponent)

