import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



    render() {


        if (this.state.islLoaded !== true) {
            return (<div></div>)
        }

        else {

            const items = this.state.items
            let item = {}
            for (let i = 0; i < items.length; i++) {
                if (items[i].id === this.state.productName) {
                    item = items[i]
                }
            }


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

