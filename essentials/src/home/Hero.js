import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './Hero.css'



class Hero extends Component {

    state = {

    }





    render() {


        return (
            <div className="hero-img" >




                <Container fluid >
                    <Row >
                        <Col lg={{ span: 5, offset: 0 }} className="hero-content">

                            <h1>Must Have Basics</h1>
                            <p>Starting from $39.99</p>
                            <Link to='/collections'> <Button size="lg" block variant="outline-light">SHOP NOW</Button></Link>



                        </Col>
                    </Row>
                </Container>







            </div>
        )
    }
}

export default Hero

