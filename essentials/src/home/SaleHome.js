import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'





class SalerHome extends Component {

    state = {

    }





    render() {


        return (
            <div >




                <Container fluid className="product-home-row">
                    <Row >
                        <Col lg={12}>
                            <p className="display-4">On Sale Items</p>
                        </Col>
                        <Col lg={4} className="showcasePadding">
                            <ProductShowcase />
                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>
                        <Col lg={4} className="showcasePadding">

                            <ProductShowcase />

                        </Col>

                        <Col lg={12}>
                            <Button variant="dark" size="lg"> VIEW ALL PRODUCTS </Button>
                        </Col>


                    </Row>

                </Container>







            </div>
        )
    }
}

export default SalerHome

