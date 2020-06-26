import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'





class Collections extends Component {


    state = {
        items: [],
        islLoaded: false
    }

    componentDidMount() {
        fetch('http://my-json-server.typicode.com/MatthewSusanto/dbJson8/tops')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    islLoaded: true,
                    items: json
                })
            })
    }




    render() {

        if (this.state.islLoaded == false) {
            return <div>


            </div>
        }
        else

            return (
                <div >




                    <Container fluid className="product-home-row mt-5" >

                        <Row>
                            <Col lg={12}>
                                <p className="display-2">Best Sellers</p>
                            </Col>
                        </Row>



                        <Row >
                            {this.state.items.map(item => (
                                <Col key={item.id} lg={4} className="showcasePadding">
                                    <ProductShowcase name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} />
                                </Col>
                            ))}
                        </Row>






                        <Container>
                            <Row >
                                <Col className="d-flex justify-content-center">
                                    <Pagination />
                                </Col>

                            </Row>

                        </Container>




                    </Container>







                </div >
            )
    }
}

export default Collections

