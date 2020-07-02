import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Spring } from 'react-spring/renderprops'

import './css/Hero.css'



function Hero() {



    return (

        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ duration: 3000 }}
        >


            {props => (
                <div style={props}>

                    <div className="hero-img" >
                        <Container fluid >

                            <Spring
                                from={{ opacity: 0, marginLeft: -500 }}
                                to={{ opacity: 1, marginLeft: 0 }}
                                config={{ duration: 1000 }}>

                                {props => <div style={props}>
                                    <Row >
                                        <Col lg={{ span: 5, offset: 0 }} className="hero-content">

                                            <h1>Must Have Basics</h1>
                                            <p>Starting from $39.99</p>
                                            <Link to='/collections/bestsellers' > <Button size="lg" block variant="outline-light">SHOP NOW</Button></Link>

                                        </Col>
                                    </Row>
                                </div>}

                            </Spring>

                        </Container>
                    </div>

                </div>
            )}

        </Spring>

    )
}


export default Hero

