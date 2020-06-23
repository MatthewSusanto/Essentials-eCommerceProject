import React, { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import './help.css'




class ContactUs extends Component {

    state = {

    }





    render() {


        return (
            <div className="help-div">



                <Container className="d-flex align-items-center justify-content-center" >
                    <Row className="">
                        <Col>
                            <Row> <h2 className="mb-5 display-2">Contact Us</h2></Row>
                            <Form >
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Row>
                                        <Col>
                                            <Form.Control placeholder="Your Name" />
                                        </Col>
                                        <Col>
                                            <Form.Control type="email" placeholder="Your Email" />
                                        </Col>
                                    </Form.Row>
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlTextarea1">

                                    <Form.Control placeholder="Your phone (optional)" type="telephone" />
                                </Form.Group>


                                <Form.Group controlId="exampleForm.ControlTextarea1">

                                    <Form.Control as="textarea" rows="3" placeholder="Your message" className="contact-us-message" />
                                </Form.Group>


                                <Button variant="success" type="submit" block size="lg">
                                    SEND MESSAGE
                                    </Button>
                            </Form>

                        </Col>
                    </Row>
                </Container>









            </div >
        )
    }
}

export default ContactUs

