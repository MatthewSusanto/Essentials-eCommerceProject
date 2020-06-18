import React, { Component } from 'react'
import { Button, Modal, Form, Container, Row, Col } from 'react-bootstrap'
import './SignIn.css'


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
                                            <Form.Text className="text-muted">

                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">

                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>

                                        <Button variant="primary" type="submit" block>
                                            Sign In
                            </Button>

                                    </Form>
                                    <Button variant="primary" type="submit" block>Create My Account</Button>
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

export default SignUp

