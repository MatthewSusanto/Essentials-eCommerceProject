import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './DetailImg.css'





class DetailImg extends Component {

    state = {

    }





    render() {


        return (
            <div>

                <Container fluid>
                    <Row>
                        <Col xl={6}>
                            <img src={boomer} className="imgtest" />
                        </Col>
                        <Col xl={6}>
                            <img src={boomer} className="imgtest" />

                        </Col>
                        <Col xl={6}>
                            <img src={boomer} className="imgtest" />
                        </Col>
                        <Col xl={6}>
                            <img src={boomer} className="imgtest" />
                        </Col>
                        <Col xl={6}>
                            <img src={boomer} className="imgtest" />
                        </Col>
                        <Col xl={6}>
                            <img src={boomer} className="imgtest" />
                        </Col>
                        <Col xl={6}>
                            <img src={boomer} className="imgtest" />
                        </Col>

                    </Row>
                </Container>



            </div>
        )
    }
}

export default DetailImg

