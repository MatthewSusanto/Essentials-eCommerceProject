import React, { Component } from 'react'
import { Button, Modal, Form, Container, Row, Col, Nav } from 'react-bootstrap'
import './SignIn.css'
import account from '../navbar/images/account.png'
import { Link, BrowserRouter, withRouter, Route } from 'react-router-dom'
import SignUp from './SignUp'


class SignIn extends Component {

    state = {
        show: false,
        signedUp: false
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleSignup = () => {
        this.setState({
            show: false,
            signedUp: true
        })
    }

    handleSignin = () => {



        if (this.state.signedUp == true) {
            this.props.history.push('/account')
        }

    }




    render() {

        console.log(this.state)
        return (
            <div>

                <Nav.Link onClick={this.handleShow}>
                    <img src={account} className="accountImg" />
                </Nav.Link>























                <Modal show={this.state.show} onHide={this.handleClose} centered size="lg">
                    <Modal.Header closeButton>

                    </Modal.Header>

                    <div className="title">
                        <h1>Login</h1>
                        <br />
                        <p>Please enter your e-mail and password:</p>

                    </div>


                    <Modal.Body closeButton>

                        <Container className="container">

                            <Row>
                                <Col>



                                    <Form className="form">


                                        <Form.Group controlId="formBasicEmail">

                                            <Form.Control type="email" placeholder="Email" />

                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">

                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>




                                        {/* <Link to="/account"> */}
                                        <Button variant="primary" type="submit" block size="lg" onClick={this.handleSignin}>
                                            Sign In
                                        </Button>
                                        {/* </Link> */}

                                    </Form>

                                    <Link to="/signup">
                                        <Button block size="lg" variant="success" onClick={this.handleSignup} > Create My Account </Button>
                                    </Link>
                                    <br />
                                    <a href="#"> Forgot your password? </a>




                                </Col>
                            </Row>
                        </Container>




                    </Modal.Body>

                </Modal>































            </div>
        )
    }
}

export default withRouter(SignIn)

