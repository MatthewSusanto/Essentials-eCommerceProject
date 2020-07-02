import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './css/DetailImg.css'
import { Spring } from 'react-spring/renderprops'





class DetailImg extends Component {

    state = {
        color_img: this.props.item.color_img
    }



    render() {

        let colorImages = Object.values(this.state.color_img)

        return (

            <Spring
                from={{ opacity: 0, marginLeft: -800 }}
                to={{ opacity: 1, marginLeft: 0 }}
                config={{ duration: 500 }}>

                {props => <div style={props}>

                    <Container fluid>
                        <Row>
                            <Col xl={6}>
                                <img src={this.props.item.primary_img} className="imgtest" />
                            </Col>
                            <Col xl={6}>
                                <img src={this.props.item.secondary_img} className="imgtest" />
                            </Col>
                            <Col xl={6}>
                                <img src={this.props.item.extra_img} className="imgtest" />
                            </Col>

                            {colorImages.map(n => (
                                <Col xl={6}>
                                    <img src={n} className="imgtest" />
                                </Col>))}

                        </Row>
                    </Container>




                </div>}
            </Spring>



        )
    }
}

export default DetailImg

