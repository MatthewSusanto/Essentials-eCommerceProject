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

                <Container className="account-comp mt-5">


                    <Row>
                        <Col>
                            <h2 className="display-4">Welcome back Jason,</h2>

                        </Col>




                    </Row>





                    <Container fluid className="p-1 mt-5 ">

                        <Row>
                            <Col>
                                <h4 className="text-left">My Orders</h4>
                            </Col>
                        </Row>



                        <OrderHistory />
                        <OrderHistory />
                        <OrderHistory />
                        <OrderHistory />

                        <Row className="justify-content-center align-items-center p-1">

                            <Col className="text-right">
                                <h3>Total: $6000</h3>

                            </Col>

                        </Row>





                    </Container>



                </Container>

            </div>
        )
    }
}

export default Account

