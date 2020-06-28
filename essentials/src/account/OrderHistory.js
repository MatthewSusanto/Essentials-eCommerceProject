import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './SignIn.css'




class OrderHistory extends Component {

    state = {

    }





    render() {


        return (
            <div className="itemlist">

                <Row className="justify-content-center order-history-item align-items-center">

                    <Col lg={2}>
                        <img src={boomer} className="productpic" />
                    </Col>
                    <Col lg={4}>
                        {`${this.props.itemDetails.itemName} ${this.props.itemDetails.chosenColour.charAt(0).toUpperCase() + this.props.itemDetails.chosenColour.slice(1)}`}
                    </Col>
                    <Col lg={2}>
                        {this.props.itemDetails.chosenSize.toUpperCase()}
                    </Col>
                    <Col lg={1} className="d-flex justify-content-center">


                        <div className="quantity">
                            1
                            </div>



                    </Col>
                    <Col lg={2}>
                        {`$${this.props.itemDetails.finalPrice}`}

                    </Col>
                </Row>


            </div>
        )
    }
}

export default OrderHistory

