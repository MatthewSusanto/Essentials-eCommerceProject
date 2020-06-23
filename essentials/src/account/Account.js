import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './SignIn.css'
import OrderHistory from './OrderHistory'




class Account extends Component {

    state = {

    }





    render() {


        return (
            <div>

                <Container className="account-comp bg-light">


                    <Row>
                        <Col>
                            <h2 className="text-left display-4">Welcome back Jason,</h2>
                        </Col>
                        <Col lg={2} className="text-left">
                            <Button variant="outline-dark" block> View My Account Details </Button>
                        </Col>

                    </Row>





                    <Container fluid className="p-1 ">

                        <Row>
                            <Col>
                                <h4 className="display-4">My Orders</h4>
                            </Col>
                        </Row>



                        <OrderHistory />
                        <OrderHistory />
                        <OrderHistory />
                        <OrderHistory />

                        <Container fluid className="bg-dark text-light">
                            <Row className="justify-content-center p-1">
                                <Col>
                                </Col>
                                <Col lg={2}>
                                    Total:
                            </Col>
                                <Col lg={2}>
                                    $6000
                            </Col>
                            </Row>


                        </Container>





                    </Container>



                </Container>

            </div>
        )
    }
}

export default Account

