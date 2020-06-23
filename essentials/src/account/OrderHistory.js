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
            <a href="">
            <Row className="justify-content-center order-history-item ">
                            <Col lg={2}>
                                <img src={boomer} className="productpic" />
                            </Col>
                            <Col lg={4}>
                                Talisman Necklace - Quartz Crystal
                            </Col>
                            <Col lg={2}>
                                L
                            </Col>
                            <Col lg={1}>
                                1
                            </Col>
                            <Col lg={2}>
                                $68.13 CAD
                           
                            </Col>
                        </Row>
                        </a>
        )
    }
}

export default OrderHistory

