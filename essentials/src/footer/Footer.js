import React, { Component } from 'react'
import { Button, Container, Row, Col, Form, Image } from 'react-bootstrap'
import './Footer.css'





class Footer extends Component {

    state = {

    }





    render() {


        return (
            <div >


                <Container fluid className="footer-1">
                    <Row >


                        <Col md>
                            <a href="">Contact Us</a>
                        </Col>
                        <Col md>
                            <a href="">FAQ</a>
                        </Col>
                        <Col md>
                            <a href="">Returns</a>
                        </Col>
                        <Col md>
                            <a href="">Care Instructions</a>
                        </Col>

                        <Col md>
                            <a href="">Changing or Modifying Order</a>
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

