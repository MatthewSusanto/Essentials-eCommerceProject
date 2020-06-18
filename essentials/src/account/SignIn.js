import React, { Component } from 'react'
import { Button, Modal, Form, Container, Row, Col, Nav } from 'react-bootstrap'
import './SignIn.css'
import account from '../navbar/images/account.png'
import { Link, BrowserRouter } from 'react-router-dom'


class SignIn extends Component {

    state = {
        show: false
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




    render() {


        return (
            <div>

                <Nav.Link href="#signin" onClick={this.handleShow}>
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


                    <Modal.Body>

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

                                        <Button variant="primary" type="submit" block size="lg">
                                            Sign In
                            </Button>

                                    </Form>

                                    <BrowserRouter>
                                        <Link to="/signup"><Button variant="primary" type="submit" block variant="success" size="lg">Create My Account</Button></Link>
                                    </BrowserRouter>
                                    <br />
                                    <a href="#"> Forgot your password? </a>




                                </Col>
                            </Row>
                        </Container>




                    </Modal.Body>

                </Modal>































            </div >
        )
    }
}

export default SignIn

