import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Spring } from 'react-spring/renderprops'
import './css/Hero.css'

function Ourstory() {



    return (

        <Spring
            from={{ opacity: 0, marginLeft: -500 }}
            to={{ opacity: 1, marginLeft: 0 }}
            config={{ duration: 3000 }}
        >

            {props => <div style={props}>

                <Container fluid className="ourstory-img">
                    <Row >
                        <Col className="ourstory-content" sm={12}>

                            <h1>Our Story</h1>
                            <p>After being frustrated with being unable to find fitted high quality essentials at a fair price, we decided to take matters in to our own hands. </p>
                            <p>Learn more about our story by browsing the timeline below.</p>

                        </Col>
                    </Row>
                </Container>

            </div>}

        </Spring>

    )
}


export default Ourstory

