import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'





class Ourstory extends Component {

    state = {

    }





    render() {


        return (
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
        )
    }
}

export default Ourstory

