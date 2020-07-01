import React, { Component } from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import './css/Hero.css'




class Newsletter extends Component {

    state = {

    }





    render() {


        return (
            <div >




                <Container fluid className="newsletter-img">
                    <Row >
                        <Col className="newsletter-content">


                            <h5>Keep Updated</h5>
                            <h1>Newsletter</h1>



                            <p>Subscribe to our newsletter to get instant notifications when we restock or launch! </p>

                            <Form>
                                <Form.Group controlId="formBasicEmail">

                                    <Form.Control type="email" placeholder="Enter your email" />

                                </Form.Group>


                                <Button variant="outline-light" type="submit" size="lg">
                                    SUBSCRIBE
                                </Button>
                            </Form>



                        </Col>
                    </Row>
                </Container>







            </div>
        )
    }
}

export default Newsletter

