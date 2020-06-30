import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './DetailImg.css'





class DetailImg extends Component {

    state = {
        color_img: this.props.item.color_img

    }





    render() {

        let colorImages = Object.values(this.state.color_img)
        console.log(colorImages)


        return (
            <div>

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



            </div>
        )
    }
}

export default DetailImg

