import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import DetailImg from './DetailImg'
import DetailDescription from './DetailDescription'
import ProductRecommendation from './ProductRecommendation'





class ProductDetail extends Component {

    state = {

    }





    render() {


        return (
            <div>

                <Container fluid >
                    <Row className="marginy">
                        <Col lg={8}>
                            <DetailImg />
                        </Col>

                        <Col lg={4} >
                            <DetailDescription />
                        </Col>
                    </Row>



                    <Row>
                        <Col>
                            <ProductRecommendation />

                        </Col>
                    </Row>



                </Container>








            </div>
        )
    }
}

export default ProductDetail

