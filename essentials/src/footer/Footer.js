import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './css/Footer.css'
import { Link } from 'react-router-dom'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import youtube from './images/youtube.png'





function Footer() {


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
                        <a href="/"><img src={twitter} className="footerImg" /></a>
                        <a href="/"><img src={facebook} className="footerImg" /></a>
                        <a href="/"><img src={youtube} className="footerImg" /></a>
                        <a href="/"><img src={instagram} className="footerImg" /></a>
                    </Col>
                </Row>

                <Row className="footer-3">
                    <Col xs>
                        © 2020 Copyright: <a href="https://www.matthewsusanto.com/">www.matthewsusanto.com</a>
                    </Col>
                </Row>

            </Container>

        </div>
    )

}

export default Footer

