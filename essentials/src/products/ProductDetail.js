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
        items: null,
        islLoaded: false,
        productName: null,

    }

    componentDidMount() {

        let productName = this.props.match.params.product_name;
        this.setState({
            productName: productName
        })

        fetch('http://my-json-server.typicode.com/MatthewSusanto/dbJson8/collection')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    islLoaded: true,
                    items: json
                })
            })
    }




    // test = () => {
    //     const items = this.state.items
    //     let item = {}
    //     for (let i = 0; i < items.length; i++) {
    //         if (items[i].id == this.state.productName) {
    //             item = items[i]
    //         }

    //     }

    //     console.log(item)

    // }



    render() {


        if (this.state.islLoaded != true) {

            return (<div>Loading...</div>)

        }

        else {

            const items = this.state.items
            let item = {}
            for (let i = 0; i < items.length; i++) {
                if (items[i].id == this.state.productName) {
                    item = items[i]
                }


            }
            console.log(item)



            return (
                <div>

                    <Container fluid >
                        <Row className="marginy">
                            <Col lg={8}>
                                <DetailImg item={item} />

                            </Col>

                            <Col lg={4} >
                                <DetailDescription name={item.name} price={item.price} description={item.description} colours={item.colour} item={item} />
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

}

export default ProductDetail

