import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, Card, Accordion } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import { connect } from 'react-redux'
import { addToCart } from '../redux/cartActions'





class DetailDescription extends Component {

    state = {

        id: this.props.item.id,
        colours: Object.keys(this.props.colours),
        quantity: null,
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0,

        discount: this.props.item.discount,

        afterDiscountPrice: ((this.props.item.price) - ((this.props.item.discount / 100) * (this.props.item.price))).toFixed(2),
        productName: this.props.name,
        activeColor: null,
        sizeActive: null,
        selectedQuantity: 1


    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addToCart(this.state.id, this.state.afterDiscountPrice, this.state.activeColor, this.state.sizeActive, this.state.selectedQuantity)

    }


    selectColor = (color) => {

        this.setState({
            activeColor: color,
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
        if (this.state.activeColor === colour) {
            return (`colourBox colourBox${colour} activecolor`)
        } else if (colour == "white") { return "colourBox colourBoxwhite" }
        else if (colour == "black") { return "colourBox colourBoxblack" }
        else if (colour == "red") { return "colourBox colourBoxred" }
        else if (colour == "navy") { return "colourBox colourBoxnavy" }
        else if (colour == "olive") { return "colourBox colourBoxolive" }
        else if (colour == "tan") { return "colourBox colourBoxtan" }
        else if (colour == "grey") { return "colourBox colourBoxgrey" }
        else if (colour == "khaki") { return "colourBox colourBoxkhaki" }
    }

    rowColor = () => {

        const colorList = this.state.colours.map((e) =>
            <div className={this.activeColor(e)} onClick={() => this.selectColor(e)}>  </div>
        )
        return (
            <Row className="colourSelection">
                {colorList}
            </Row>

        )

    }

    chooseSize = (size) => {
        let chosenSize = size
        this.setState({
            sizeActive: chosenSize,
            quantity: this.props.item.colour[this.state.activeColor].size[chosenSize].quantity
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

    handleQuantitySelect = (e) => {

        this.setState({
            selectedQuantity: e.target.value
        })
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
                <option value={e}>
                    {e}
                </option>
            )

            return (list)
        }

    }

    toUppercase = () => {

        if (this.state.activeColor !== null) {

            return this.state.activeColor.charAt(0).toUpperCase() + this.state.activeColor.slice(1);
        }
    }
































    render() {

        if (this.state.islLoaded == false) {
            return <div>
                Loading...
            </div>
        }
        else {

            console.log(this.props.theCart)

            return (
                <div>

                    <Container fluid className="detail-description-container">

                        <Row>
                            <Col>
                                <h2 className="display-3 h1"> {this.state.productName} {this.toUppercase()} </h2>
                            </Col>
                        </Row>


                        <Row>
                            <Col>
                                <h4><span className="h1">Price: </span>  <span className="text-danger h1"> ${this.state.afterDiscountPrice}</span> <strike className="text-muted text-decoration-"> {this.state.discount ? `$${(this.props.price).toFixed(2)}` : ""}</strike><span className="text-success"> {this.state.discount ? `(${this.state.discount}% off)` : ""}</span> </h4>
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
                                        <Form.Control as="select" onChange={this.handleQuantitySelect}>
                                            {this.quantitySelect()}

                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Col>



                        </Row>

                        <Row>
                            <Col>
                                <Button variant="success" disabled={this.state.sizeActive ? false : true} block size="lg" onClick={this.handleSubmit}> ADD TO CART</Button>
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
                                    <li> 62% lorems </li>
                                    <li> 13% lorema </li>
                                    <li> 89% lorem </li>
                                    <li> 520 grams </li>
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

// const mapStateToProps = (state) =>{
//     return{
//         cart: state.cart.
//     }
// }
const mapStateToProps = (state) => {
    return {
        theCart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (itemId, finalPrice, chosenColour, chosenSize, chosenQuantity) => dispatch(addToCart(itemId, finalPrice, chosenColour, chosenSize, chosenQuantity))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailDescription)