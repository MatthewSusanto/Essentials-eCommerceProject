import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Spring, config } from 'react-spring/renderprops'





class Ourstory extends Component {

    state = {

    }





    render() {


        return (

            <Spring
                from={{ opacity: 0, marginLeft: -500 }}
                to={{ opacity: 1, marginLeft: 0 }}
                config={{ duration: 1000 }}
            >
                {props => <div style={props}>

                    <div >




                        <Container fluid className="ourstory-img">
                            <Row >
                                <Col className="ourstory-content" sm={12}>

                                    <h1>Our Story</h1>



                                    <p>After being frustrated with being unable to find fitted high quality essentials at a fair price, we decided to take matters in to our own hands. </p>
                                    <p>Learn more about our story by browsing the timeline below.</p>



                                </Col>
                            </Row>
                        </Container>







                    </div>

                </div>}
            </Spring>


        )
    }
}

export default Ourstory

