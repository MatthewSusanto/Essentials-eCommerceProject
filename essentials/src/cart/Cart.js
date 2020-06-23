import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import OrderHistory from '../account/OrderHistory'
import CartItem from './CartItem'
import CartModal from './CartModal'



class Cart extends Component {

    state = {

    }





    render() {


        return (
            <div>

                <Container className="account-comp my-5">







                    <Container fluid className="p-1 ">

                        <Row>
                            <Col>
                                <h4 className="display-4">Your Shopping Bag</h4>
                            </Col>
                        </Row>



                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />

                        <Container fluid className="bg-dark text-light p-1">

                            <Row className="justify-content-center align-items-center p-1">

                                <Col lg={6} className="text-left">
                                    <h3>Promotional Code</h3>

                                </Col>

                                <Col lg={6} className="d-flex justify-content-end">
                                    <Form inline>
                                        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                            Name
                                         </Form.Label>
                                        <Form.Control
                                            className="mb-2 mr-sm-2"
                                            id="inlineFormInputName2"
                                            placeholder="Enter Promo Code"
                                        />



                                        <Button type="submit" className="mb-2">
                                            Apply
                                      </Button>
                                    </Form>

                                </Col>
                            </Row>

                            <Row className="justify-content-center align-items-center p-1">

                                <Col lg={6} className="text-left">
                                    <h3>Total: <span className="text-success h1">$600</span> <del className="text-danger h5"> $5555</del></h3>

                                </Col>
                                <Col lg={6} className="text-right">

                                    <Button variant="success" size="lg" block>Proceed to checkout</Button>
                                </Col>
                            </Row>




                        </Container>





                    </Container>



                </Container>

            </div >
        )
    }
}

export default Cart

