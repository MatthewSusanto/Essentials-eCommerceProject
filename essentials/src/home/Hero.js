import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import './Hero.css'



class Hero extends Component {

    state = {

    }





    render() {


        return (
            <div >




                <Container fluid className="hero-img">
                    <Row >
                        <Col className="hero-content">

                            <h1>Must Have Basics</h1>
                            <p>Starting from $39.99</p>
                            <Button size="lg" block variant="outline-light">SHOP NOW</Button>


                        </Col>
                    </Row>
                </Container>







            </div>
        )
    }
}

export default Hero

