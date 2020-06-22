import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './ProductRecommendation'





class ProductRecommendation extends Component {

    state = {

    }





    render() {


        return (
            <div>

                <Container fluid >

                    <Row>
                        <Col lg={12} >
                            <hr />
                            <p className="display-4">You May Also Like</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} className="px-5">
                            <ProductShowcase />
                        </Col>
                        <Col lg={4} className="px-5">
                            <ProductShowcase />
                        </Col>
                        <Col lg={4} className="px-5">
                            <ProductShowcase />
                        </Col>

                    </Row>


                </Container>

            </div>
        )
    }
}

export default ProductRecommendation

