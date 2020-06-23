import React, { Component } from 'react'
import { Button, Container, Row, Col, Form, Image } from 'react-bootstrap'
import './Footer.css'
import { Link } from 'react-router-dom'





class Footer extends Component {

    state = {

    }





    render() {


        return (
            <div >


                <Container fluid className="footer-1">
                    <Row >


                        <Col md>
                            <Link to="/contact-us">
                                Contact Us</Link>
                        </Col>

                        <Col md>
                            <Link to="/faq">
                                FAQ</Link>
                        </Col>

                        <Col md>
                            <Link to="/returns">
                                Returns</Link>
                        </Col>

                        <Col md>
                            <Link to="/care">
                                Care Instructions</Link>
                        </Col>

                        <Col md>
                            <Link to="/change-order">
                                Changing Order</Link>
                        </Col>




                    </Row>
                </Container>



                <Container fluid >

                    <Row className="footer-2">
                        <Col xs>
                            <a href="/"><Image src='assets/images/twitter.png' className="footerImg" /></a>
                            <a href="/"><Image src='assets/images/facebook.png' className="footerImg" /></a>
                            <a href="/"><Image src='assets/images/youtube.png' className="footerImg" /></a>
                            <a href="/"> <Image src='assets/images/instagram.png' className="footerImg" /></a>
                        </Col>
                    </Row>

                    <Row className="footer-3">
                        <Col xs>
                            © 2020 Copyright: <a href="/">www.matthewsusanto.com</a>
                        </Col>
                    </Row>


                </Container>








            </div>
        )
    }
}

export default Footer

