import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './ProductShowcase.css'
import tees from './images/tees.png'
import tees2 from './images/tees2.PNG'





class ProductShowcase extends Component {

    state = {
        onHover: false
    }

    onHoverImg = () => {
        if (this.state.onHover == true) {

        }

    }

    itemSizing = () => {
        return (<Container fluid className="testy1">
            <Row>

                <Col lg>
                    <a href="" >XS</a>
                </Col>
                <Col lg>
                    <a href="" >S</a>
                </Col>
                <Col lg>
                    <a href="" >M</a>
                </Col>
                <Col lg>
                    <a href="" >L</a>
                </Col>
                <Col lg>
                    <a href="" >XL</a>
                </Col>

            </Row>
        </Container>)
    }





    render() {


        return (
            <div >


                <Container className="show-case">
                    <Row >
                        <Col
                            onMouseEnter={() => this.setState({ onHover: true })}
                            onMouseLeave={() => this.setState({ onHover: false })}
                            className='columntest'

                        >
                            <div className="testy"> SOLD OUT </div>


                            {this.state.onHover ? this.itemSizing() : null}



                            <a href=""><img src={this.state.onHover ? tees2 : tees} className="tees" /></a>

                        </Col>
                    </Row>

                    <Row className="showcase-details">
                        <Col>
                            <p> THE ESNTL NAVY TEE </p>
                            <p> $30 </p>
                        </Col>
                    </Row>
                </Container>








            </div>
        )
    }
}

export default ProductShowcase

