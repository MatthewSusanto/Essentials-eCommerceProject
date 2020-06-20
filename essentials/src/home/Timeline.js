import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import timeline1 from './images/timeline1.PNG'
import timeline2 from './images/timeline2.jpeg'
import timeline3 from './images/timeline3.png'





class Timeline extends Component {

    state = {

    }





    render() {


        return (
            <div >




                <Container className="timeline">
                    <Row className="rowHeight" >
                        <Col sm={8} >


                            <img src={timeline1} className="timelineImg" />


                        </Col>

                        <Col sm={4} >





                            <p>After being frustrated with the what's on the market, we set out to create the perfect basic tee.</p>



                        </Col>
                    </Row>


                    <Row >
                        <Col className="radio">
                            <div>2018</div> <div>2019</div> <div>2020</div>
                        </Col>

                    </Row>
                </Container>







            </div>
        )
    }
}

export default Timeline

