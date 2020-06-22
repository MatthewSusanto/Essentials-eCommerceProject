import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import DetailImg from './DetailImg'
import DetailDescription from './DetailDescription'





class ProductDetail extends Component {

    state = {

    }





    render() {


        return (
            <div >

                <Container fluid className=" mt-5">
                    <Row>
                        <Col lg={8} className="bg-primary">

                            <DetailImg />

                            {/* <Row>

                              
                                <Col xl={6}>
                                    <img src={boomer} />

                                </Col>
                                <Col xl={6}>
                                    <img src={boomer} />

                                </Col>
                                <Col xl={6}>
                                    <img src={boomer} />



                                </Col>

                            </Row> */}

                        </Col>























































                        <Col lg={4} >
                            <DetailDescription />





                            {/* <Container fluid >
                                <Row >

                                    <Col className="bg-primary">
                                        <Row >
                                            <Col>
                                                <h2> THE ESNTL NAVY TEE </h2>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col className="sizingRow mb-2 mt-1">
                                                <h2 className="text-danger"> $40 <span className="text-muted"> was $60</span> </h2>
                                            </Col>
                                        </Row>



                                        <Row className="sizingRow my-4">




                                            <Col >
                                                <button className="sizingbtn active"> XS </button>
                                            </Col>
                                            <Col>
                                                <button className="sizingbtn"> S </button>
                                            </Col>
                                            <Col>
                                                <button className="sizingbtn"> M </button>
                                            </Col>
                                            <Col>

                                                <button className="sizingbtn"> L </button>
                                            </Col>
                                            <Col>
                                                <button className="sizingbtn"> XL </button>
                                            </Col>
                                        </Row>

                                        <Row className="quantity mt-5">
                                            <Col xs={3} >
                                                <h4>Quantity: </h4>
                                            </Col>
                                            <Col xs={9}>
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

                                        <Row className="mt-2">
                                            <Col>
                                                <Button variant="success" block size="lg"> ADD TO CART</Button>
                                            </Col>

                                        </Row>

                                        <p className="h5 my-5"> With a bamboo and cotton blend our t-shirts are the most versatile T's in the market. The bamboo is a natural antibacterial fabric that fights odors and keeps you refreshed all day. They feature a perfect fit straight out of the bag. You can dress it up to go out in town or dress it down to go to the gym, the thick 320g fabrics is a durable blend that will work with you </p>

                                        <ul className="productList">
                                            <li> 65% Bamboo </li>
                                            <li> 28% Cotton </li>
                                            <li> 7% Spandex </li>
                                            <li> 320 grams </li>

                                        </ul>


                                    </Col>
                                </Row>

                            </Container> */}
















                        </Col>
                    </Row>
                </Container>








            </div >
        )
    }
}

export default ProductDetail

