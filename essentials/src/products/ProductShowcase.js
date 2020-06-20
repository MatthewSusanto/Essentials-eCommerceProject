import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './ProductShowcase.css'
import tees from './images/tees.png'





class ProductShowcase extends Component {

    state = {

    }





    render() {


        return (
            <div >


                <Container className="show-case">
                    <Row>
                        <Col >
                            <img src={tees} className="tees" />
                        </Col>
                    </Row>

                    <Row className="showcase-details">
                        <Col>
                            <p> THE ESNTL NAVY TEE </p>
                            <p> $30 </p>
                        </Col>
                    </Row>
                </Container>








            </div>
        )
    }
}

export default ProductShowcase

