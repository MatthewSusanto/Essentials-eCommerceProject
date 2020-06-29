import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'





class Collections extends Component {


    state = {
        items: [],
        islLoaded: false,
        productType: null
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

        let productType = this.props.match.params.product_type;
        this.setState({
            productType: productType
        })

    }

    showItems = () => {

        const items = this.state.items
        let item = []


        if (this.state.productType == "sale") {

            for (let i = 0; i < items.length; i++) {
                if (items[i].discount !== 0) {
                    item.push(items[i])
                }
            }

            return (
                item.map(item => (
                    <Col key={item.id} lg={4} className="showcasePadding">
                        <ProductShowcase type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                    </Col>))
            )

        } else if (this.state.productType == "bestsellers") {


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
                item.slice(0, 5).map(item => (
                    <Col key={item.id} lg={4} className="showcasePadding">
                        <ProductShowcase type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                    </Col>))
            )


        }



        else if (this.state.productType == null) {
            return (
                this.state.items.map(item => (
                    <Col key={item.id} lg={4} className="showcasePadding">
                        <ProductShowcase type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                    </Col>)))
        } else {


            for (let i = 0; i < items.length; i++) {
                if (items[i].type == this.state.productType) {
                    item.push(items[i])
                }


            }
            return (
                item.map(item => (
                    <Col key={item.id} lg={4} className="showcasePadding">
                        <ProductShowcase type={item.type} discount={item.discount} name={item.name} price={item.price} primaryImg={item.primary_img} secondaryImg={item.secondary_img} id={item.id} />
                    </Col>
                )))
        }
    }







    render() {

        if (this.state.islLoaded == false) {
            return <div>


            </div>
        }
        else {

            // const items = this.state.items
            // let item = []
            // for (let i = 0; i < items.length; i++) {
            //     if (items[i].type == this.state.productType) {
            //         item.push(items[i])
            //     }


            // }


            // console.log(items)
            // console.log(item)
            // console.log(this.state.items)

            return (
                <div >




                    <Container fluid className="product-home-row mt-5" >

                        <Row>
                            <Col lg={12}>
                                <h2 className="display-3 h1">{this.state.productType ? (this.state.productType.toUpperCase()) : 'COLLECTIONS'}</h2>
                            </Col>
                        </Row>



                        <Row >
                            {this.showItems()}
                        </Row>






                        <Container>
                            <Row >
                                <Col className="d-flex justify-content-center">
                                    <Pagination />
                                </Col>

                            </Row>

                        </Container>




                    </Container>







                </div>
            )
        }
    }
}

export default Collections

