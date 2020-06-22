import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './DetailDescription.css'





class DetailDescription extends Component {

    state = {

    }





    render() {


        return (
            <div>

                <Container fluid >

                    <Row>
                        <Col>
                            <h2> THE ESNTL NAVY TEE </h2>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <h2 className="text-danger"> $40 <span className="text-muted"> was $60</span> </h2>
                        </Col>
                    </Row>


                    <Row className="sizingButtons">

                        <Col>
                            <Button> XS </Button>
                        </Col>
                        <Col>
                            <Button> XS </Button>
                        </Col>
                        <Col>
                            <Button> XS </Button>
                        </Col>
                        <Col>
                            <Button> XS </Button>
                        </Col>
                        <Col>
                            <Button> XS </Button>
                        </Col>

                    </Row>

                    <Row>
                        <Col x={3}>
                            <h4>Quantity: </h4>
                        </Col>
                        <Col x={9}>
                            <Form>
                                <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Control as="select" custom>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Button variant="success" block size="lg"> ADD TO CART</Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <p className=""> With a bamboo and cotton blend our t-shirts are the most versatile T's in the market. The bamboo is a natural antibacterial fabric that fights odors and keeps you refreshed all day. They feature a perfect fit straight out of the bag. You can dress it up to go out in town or dress it down to go to the gym, the thick 320g fabrics is a durable blend that will work with you </p>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <ul className="productList">
                                <li> 65% Bamboo </li>
                                <li> 28% Cotton </li>
                                <li> 7% Spandex </li>
                                <li> 320 grams </li>
                            </ul>
                        </Col>
                    </Row>




                </Container>



            </div>
        )
    }
}

export default DetailDescription

