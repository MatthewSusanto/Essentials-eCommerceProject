import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'





class BestsellerHome extends Component {

    state = {

    }





    render() {


        return (
            <div >




                <Container fluid>
                    <Row className="product-home-row">
                        <Col lg={4}>
                            <ProductShowcase />
                        </Col>
                        <Col lg={4}>

                            <ProductShowcase />

                        </Col>
                        <Col lg={4}>

                            <ProductShowcase />

                        </Col>

                    </Row>
                </Container>







            </div>
        )
    }
}

export default BestsellerHome

