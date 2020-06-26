import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'





class DetailDescription extends Component {

    state = {
        active: null,
        colours: Object.keys(this.props.colours),
        quantity: null,
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0,
        sizeActive: null,



    }

    selectColor = (color) => {

        this.setState({
            active: color,

            xs: this.props.item.colour[color].size.xs.quantity,
            s: this.props.item.colour[color].size.s.quantity,
            m: this.props.item.colour[color].size.m.quantity,
            l: this.props.item.colour[color].size.l.quantity,
            xl: this.props.item.colour[color].size.xl.quantity,
            sizeActive: null,
            quantity: null

        })
    }

    activeColor = (colour) => {
        if (this.state.active === colour) {
            return (`colourBox colourBox${colour} activecolor`)
        } else if (colour == "white") { return "colourBox colourBoxwhite" }
        else if (colour == "black") { return "colourBox colourBoxblack" }
        else if (colour == "red") { return "colourBox colourBoxred" }
        else if (colour == "navy") { return "colourBox colourBoxnavy" }
    }

    rowColor = () => {

        const jason = this.state.colours.map((e) =>


            <div className={this.activeColor(e)} onClick={() => this.selectColor(e)}>  </div>


        )
        return (
            <Row className="colourSelection">

                {jason}

            </Row>

        )




    }

    chooseSize = (size) => {
        let chosenSize = size
        this.setState({
            sizeActive: chosenSize,
            quantity: this.props.item.colour[this.state.active].size[chosenSize].quantity
        })
    }

    sizeActive = (size) => {
        if ((this.state.sizeActive == size) && (this.state[size] !== 0)) {
            return ("warning")
        } else if (this.state[size] !== 0) {
            return ("outline-dark")
        } else if (this.state[size] == 0) {
            return ("secondary")
        }
    }

    showQuantity = () => {

        if (this.state.quantity == null) {
            return (null)
        } else if (this.state.quantity > 10) {
            return (<p className="text-success">More than 10 available</p>)
        } else if (this.state.quantity < 10) {
            return (<p className="text-danger">Only {this.state.quantity} left</p>)
        }
        console.log(this.state.quantity)
    }

    quantitySelect = () => {

        if (this.state.quantity == null) {
            return (<option>Choose a colour and size</option>)
        } else {

            let number = []
            for (let index = 1; index < this.state.quantity + 1; index++) {
                number.push(index)

            }




            var list = number.map((e) =>
                <option key={e}>{e}</option>
            )

            return (list)
        }



    }


    render() {

        if (this.state.islLoaded == false) {
            return <div>
                Loading...
            </div>
        }
        else {


















            return (
                <div>

                    <Container fluid className="detail-description-container">

                        <Row>
                            <Col>
                                <h2> {this.props.name} </h2>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <h2 className="text-danger"> ${this.props.price} <span className="text-muted"> was $60nigg</span> </h2>
                            </Col>
                        </Row>



                        {this.rowColor()}



                        <Row className="sizingButtons">

                            <Button variant={this.sizeActive('xs')} disabled={this.state.xs ? false : true} onClick={() => this.chooseSize('xs')} > XS  </Button>
                            <Button variant={this.sizeActive('s')} disabled={this.state.s ? false : true} onClick={() => this.chooseSize('s')}> S </Button>
                            <Button variant={this.sizeActive('m')} disabled={this.state.m ? false : true} onClick={() => this.chooseSize('m')}> M </Button>
                            <Button variant={this.sizeActive('l')} disabled={this.state.l ? false : true} onClick={() => this.chooseSize('l')}> L </Button>
                            <Button variant={this.sizeActive('xl')} disabled={this.state.xl ? false : true} onClick={() => this.chooseSize('xl')}> XL </Button>


                        </Row>



                        <Row>
                            <Col>
                                <h4>Quantity: </h4>{this.showQuantity()}

                                <Form>
                                    <Form.Group controlId="exampleForm.SelectCustom">
                                        <Form.Control as="select" custom>
                                            {this.quantitySelect()}
                                            {/* 
                                           
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option> */}
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>



                        </Row>

                        <Row>
                            <Col>
                                <Button variant="success" block size="lg"> ADD TO CART</Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p className=""> {this.props.description} </p>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <ul className="productList">
                                    <li> 65% Bamboo </li>
                                    <li> 28% Cotton </li>
                                    <li> 7% Spandex </li>
                                    <li> 320 grams </li>
                                </ul>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Accordion>
                                    <Card>

                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            DELIVERY <span>&#x25BC;</span>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>We offer free shipping in the US and Canada. </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>

                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            FIT <span>&#x25BC;</span>
                                        </Accordion.Toggle>

                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>We've fixed all the headaches of finding the right fitting essentials. Our essentials fit so well that you will replace your entire wardrobe with our products!</Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                        </Row>




                    </Container>



                </div>
            )
        }
    }
}

export default DetailDescription

