import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './SignIn.css'
import OrderHistory from './OrderHistory'
import { connect } from 'react-redux'





class Account extends Component {

    state = {

    }





    render() {


        return (
            <div>

                <Container className="account-comp mt-5">


                    <Row>
                        <Col>
                            <h2 className="display-4 mt-5">Welcome Back</h2>

                        </Col>




                    </Row>





                    <Container fluid className="p-1 mt-5 ">

                        <Row>
                            <Col>
                                <h4 className="text-left">My Order History</h4>
                            </Col>
                        </Row>

                        {this.props.items.map((e) =>
                            <OrderHistory itemDetails={e} />
                        )}

                        {/* <OrderHistory />
                        <OrderHistory />
                        <OrderHistory />
                        <OrderHistory /> */}

                        <Row className="justify-content-center align-items-center p-1 mt-5">

                            <Col className="text-center bg-dark text-warning p-4">
                                <h3>Thank You For Shopping With Us!</h3>

                            </Col>

                        </Row>





                    </Container>



                </Container>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        subTotal: state.cart.subTotal
    }
}

export default connect(mapStateToProps)(Account
)
