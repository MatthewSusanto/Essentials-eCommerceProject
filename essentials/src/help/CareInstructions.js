import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'





class CareInstructions extends Component {

    state = {

    }





    render() {


        return (
            <div >




                <Container fluid className="product-home-row mt-5" >

                    <Row>
                        <Col lg={12}>
                            <p className="display-2">Best Sellers</p>
                        </Col>
                    </Row>
                    <Row >

                        <Col lg={4} className="showcasePadding">
                            <ProductShowcase />
                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                    </Row>
                    <Row >

                        <Col lg={4} className="showcasePadding">
                            <ProductShowcase />
                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                    </Row>
                    <Row >

                        <Col lg={4} className="showcasePadding">
                            <ProductShowcase />
                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                    </Row>
                    <Row >

                        <Col lg={4} className="showcasePadding">
                            <ProductShowcase />
                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                    </Row>

                    <Container>
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <Pagination />
                            </Col>

                        </Row>

                    </Container>




                </Container>







            </div>
        )
    }
}

export default CareInstructions

