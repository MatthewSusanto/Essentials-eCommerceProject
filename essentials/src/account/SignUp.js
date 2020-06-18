import React, { Component } from 'react'
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap'
import './SignIn.css'
import { Link, BrowserRouter } from 'react-router-dom'



class SignUp extends Component {

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

    handleSignUp = () => {
        this.props.history.push('/signup')
    }




    render() {


        return (
            <div>

                <Button variant="primary" onClick={this.handleShow}>
                    Launc
      </Button>























                <Modal show={this.state.show} onHide={this.handleClose} centered size="lg">
                    <Modal.Header closeButton>

                    </Modal.Header>

                    <div className="title">
                        <h1>Register</h1>
                        <br />
                        <p>Please fill in the information below:</p>

                    </div>


                    <Modal.Body>

                        <Container className="container">

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

                                        <Button variant="primary" type="submit" block size="lg" variant="success" onClick={this.handleSignUp}>
                                            Create My Account
                                          </Button>


                                        <BrowserRouter>
                                            <Link to="/signup"> GO TO</Link>
                                        </BrowserRouter>

                                    </Form>





                                </Col>
                            </Row>
                        </Container>




                    </Modal.Body>

                </Modal>































            </div >
        )
    }
}

export default SignUp

