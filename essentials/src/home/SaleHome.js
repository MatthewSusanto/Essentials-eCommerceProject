import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import { Link } from 'react-router-dom'





class SalerHome extends Component {

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


    showItems = () => {

        const items = this.state.items
        let item = []
        for (let i = 0; i < items.length; i++) {
            if (items[i].discount !== 0) {
                item.push(items[i])
            }
        }

        return (
            item.slice(0, 3).map(item => (
                <Col key={item.id} lg={4} className="showcasePadding">
                    <ProductShowcase colour={item.colour} type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                </Col>))
        )


    }





    render() {

        if (this.state.islLoaded == false) {
            return <div>


            </div>
        } else


            return (
                <div >




                    <Container fluid className="product-home-row">
                        <Row >
                            <Col lg={12}>
                                <p className="display-4">On Sale Items</p>
                            </Col>

                            {this.showItems()}

                            <Col lg={12}>
                                <Link to="/collections/sale">
                                    <Button variant="dark" size="lg"> VIEW SALE ITEMS </Button>
                                </Link>
                            </Col>


                        </Row>

                    </Container>







                </div>
            )
    }
}

export default SalerHome

