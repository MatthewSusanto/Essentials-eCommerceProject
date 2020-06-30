import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import { Link } from 'react-router-dom'





class BestsellerHome extends Component {

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
        for (let i = 0; i < items.length; i++) {

            item.push(items[i])

        }

        let counter = item.length
        while (counter > 0) {

            let index = Math.floor(Math.random() * counter);
            counter--;
            let temp = item[counter];
            item[counter] = item[index];
            item[index] = temp;
        }


        return (
            item.slice(0, 3).map(item => (
                <Col key={item.id} lg={4} className="showcasePadding">
                    <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                </Col>))
        )


    }





    render() {


        return (
            <div >




                <Container fluid className="product-home-row">
                    <Row >
                        <Col lg={12}>
                            <p className="display-4">Best Sellers</p>
                        </Col>

                        {this.showItemsRandom()}

                        <Col lg={12}>
                            <Link to="/collections/bestsellers">
                                <Button variant="dark" size="lg"> VIEW BEST SELLERS </Button>
                            </Link>
                        </Col>


                    </Row>

                </Container>







            </div>
        )
    }
}

export default BestsellerHome

