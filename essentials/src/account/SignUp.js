import React, { Component } from 'react'
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap'
import './css/SignIn.css'
import { Link, BrowserRouter } from 'react-router-dom'



class SignUp extends Component {

    state = {
        showSignup: false,
        signedUp: false
    }

    handleSignup = () => {
        this.setState({
            signedUp: true
        })
    }




    render() {


        return (
            <div className="help-div d-flex align-items-center">


                <Container >
                    <Row className="d-flex justify-content-center"><h2 className="display-4 h3">Register</h2></Row>
                    <Row className="d-flex justify-content-center">  <p className="h4">Please fill in the information below:</p></Row>





                    <Row>
                        <Col>


                            <Form className="form">


                                <Form.Group controlId="formBasicFirstName">


                                    <Form.Control placeholder="First name" />

                                </Form.Group>

                                <Form.Group controlId="formBasicLastName">


                                    <Form.Control placeholder="Last name" />

                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">


                                    <Form.Control type="email" placeholder="Email" />

                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">

                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <br />

                                <Link to="/account">
                                    <Button variant="primary" type="submit" block size="lg" variant="success" onClick={this.handleSignup}>


                                        Create My Account


                                        </Button>
                                </Link>





                            </Form>





                        </Col>
                    </Row>
                </Container>

































            </div >
        )
    }
}

export default SignUp

