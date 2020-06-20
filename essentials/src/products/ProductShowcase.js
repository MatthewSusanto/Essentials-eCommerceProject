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





    render() {


        return (
            <div >


                <Container className="show-case">
                    <Row>
                        <Col
                            onMouseEnter={() => this.setState({ onHover: true })}
                            onMouseLeave={() => this.setState({ onHover: false })}
                        >
                            <div className="testy"> SOLD OUT </div>
                            <img src={this.state.onHover ? tees2 : tees} className="tees" />
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

