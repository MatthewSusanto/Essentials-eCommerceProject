import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import './css/ProductRecommendation.css'





class ProductRecommendation extends Component {

    state = {
        items: [],
        islLoaded: false,
    }

    componentDidMount() {
        fetch('http://my-json-server.typicode.com/MatthewSusanto/dbJson8/collection')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    islLoaded: true,
                    items: json
                })
            })
    }


    showItemsRandom = () => {

        const items = this.state.items
        let item = []
        let counter = item.length

        for (let i = 0; i < items.length; i++) {
            item.push(items[i])
        }

        while (counter > 0) {
            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = item[counter];
            item[counter] = item[index];
            item[index] = temp;
        }

        return (
            item.slice(0, 3).map(item => (
                <Col lg={4} className="px-5">
                    <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                </Col>))
        )


    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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
                        {this.showItemsRandom()}
                    </Row>
                </Container>

            </div>
        )
    }
}

export default ProductRecommendation

