import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'





class Collections extends Component {

    state = {

    }





    render() {


        return (
            <div >




                <Container fluid className="product-home-row">

                    <Row>
                        <Col lg={12}>
                            <p className="display-4">Best Sellers</p>
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


                    <Row>
                        <Col lg={12}>
                            <Pagination />
                        </Col>

                    </Row>



                </Container>







            </div>
        )
    }
}

export default Collections

