import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import './ProductShowcase.css'
import tees from './images/tees.png'
import tees2 from './images/tees2.PNG'
import { withRouter } from 'react-router-dom'





class ProductShowcase extends Component {

    state = {
        onHover: false
    }

    onHoverImg = () => {
        if (this.state.onHover == true) {

        }

    }

    handleImgClick = () => {
        let id = this.props.id
        let type = this.props.type
        this.props.history.push('/collections/' + type + '/' + id)

    }

    itemSizing = () => {
        return (<Container fluid className="testy1">
            <Row>

                <Col lg>
                    <a href="" >XS</a>
                </Col>
                <Col lg>
                    <a href="" >S</a>
                </Col>
                <Col lg>
                    <a href="" >M</a>
                </Col>
                <Col lg>
                    <a href="" >L</a>
                </Col>
                <Col lg>
                    <a href="" >XL</a>
                </Col>

            </Row>
        </Container>)
    }





    render() {


        return (
            <div >


                <Container className="show-case">
                    <Row >
                        <Col
                            onMouseEnter={() => this.setState({ onHover: true })}
                            onMouseLeave={() => this.setState({ onHover: false })}
                            className='columntest'
                            onClick={this.handleImgClick}

                        >
                            {this.props.discount ? <div className="testy"> {this.props.discount}% Off  </div> : null}


                            {this.state.onHover ? this.itemSizing() : null}



                            <a href=""><img src={this.state.onHover ? this.props.secondaryImg : this.props.primaryImg} className="tees" /></a>

                        </Col>
                    </Row>

                    <Row className="showcase-details">
                        <Col>
                            <p className="h3"> {this.props.name} </p>
                            <p className="h5 text-secondary"> ${this.props.price} </p>
                        </Col>
                    </Row>
                </Container>








            </div>
        )
    }
}

export default withRouter(ProductShowcase)

