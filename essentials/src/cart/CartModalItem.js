import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './CartModal.css'
import { connect } from 'react-redux'
import { removeFromCart, addQuantity, removeQuantity } from '../redux/cartActions'







class CartModalItem extends Component {

    state = {

        show: true,
        totalPrice: ((this.props.itemDetails.chosenQuantity * this.props.itemDetails.finalPrice).toFixed(2)),
        previousPrice: ((this.props.itemDetails.previousPrice).toFixed(2)),
        modalSubtotal: parseInt(this.props.modalSubtotal),
        quantity: this.props.itemDetails.chosenQuantity,
        subTotal: this.props.itemDetails.chosenQuantity * parseFloat(this.props.itemDetails.finalPrice)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let prevstateplus1 = (prevState.quantity + 1)
        if (this.state.quantity == prevstateplus1) {
            this.props.addQuantity(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
        }

        let prevstateremove1 = (prevState.quantity - 1)
        if (this.state.quantity == prevstateremove1) {
            this.props.removeQuantity(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
        }

        console.log(this.props.theCart)
    }


    addButton = () => {

        let quantity = parseInt(this.state.quantity) + 1
        let subTotal = (this.state.subTotal) + parseFloat(this.props.itemDetails.finalPrice)

        // let subTotal = (this.state.subTotal) + parseFloat(this.props.itemDetails.finalPrice)

        this.setState({
            quantity: quantity,
            subTotal: subTotal
            // subTotal: subTotal
        })

        // this.props.addQuantity(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
        console.log(this.props.theCart)

    }

    removeButton = () => {

        if (this.state.quantity > 1) {
            let quantity = parseInt(this.state.quantity) - 1
            let subTotal = (this.state.subTotal) - parseFloat(this.props.itemDetails.finalPrice)
            // let subTotal = (this.state.subTotal) + parseFloat(this.props.itemDetails.finalPrice)

            this.setState({
                quantity: quantity,
                subTotal: subTotal
                // subTotal: subTotal
            })

            // this.props.addQuantity(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
            console.log(this.props.theCart)
        }

    }



    xButton = () => {

        this.props.removeFromCart(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
    }





    render() {

        if (this.state.show == true) {



            return (
                <div className="itemlist">

                    <Row className="justify-content-center order-history-modal-item align-items-center">




                        <Col>
                            <img src={this.props.itemDetails.productImage} className="productpic" />
                        </Col>
                        <Col className="text-left">
                            <Row className='h4' >{this.props.itemDetails.itemName}</Row>
                            <Row className='h4 text-danger'> ${this.props.itemDetails.finalPrice} </Row>
                            <Row><strike className="text-muted">{(this.props.itemDetails.discount == 0) ? ' ' : `$${this.state.previousPrice} `} </strike> &nbsp; <span className="text-success"> {(this.props.itemDetails.discount == 0) ? ' ' : `(${this.props.itemDetails.discount} % Off)`}</span> </Row>
                            <hr />
                            <Row><strong>Colour: </strong> &nbsp; {this.props.itemDetails.chosenColour.charAt(0).toUpperCase() + this.props.itemDetails.chosenColour.slice(1)}</Row>
                            <Row><strong>Size: </strong> &nbsp; {this.props.itemDetails.chosenSize.toUpperCase()}</Row>
                            <Row className='d-flex align-items-center'><strong>Quantity: </strong> &nbsp;  <Button size="sm" disabled={(this.state.quantity == 1) ? true : false} variant="dark" className="mx-1" onClick={this.removeButton}>-</Button> <strong>{`${this.props.itemDetails.chosenQuantity}X `}</strong> <Button className="mx-1" variant='dark' size="sm" onClick={this.addButton}>+</Button></Row>
                            <Row><strong>Total: </strong> &nbsp; {`$${this.state.subTotal.toFixed(2)}`}</Row>


                        </Col>



                    </Row>


                    <span><button className="xButton" onClick={this.xButton}>&times;</button></span>
                </div>
            )
        }
        else return null
    }

}


const mapStateToProps = (state) => {
    return {
        totalAmount: state.cart.totalAmount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (orderNumber, chosenQuantity, finalPrice) => dispatch(removeFromCart(orderNumber, chosenQuantity, finalPrice)),
        addQuantity: (orderNumber, chosenQuantity, finalPrice) => dispatch(addQuantity(orderNumber, chosenQuantity, finalPrice)),
        removeQuantity: (orderNumber, chosenQuantity, finalPrice) => dispatch(removeQuantity(orderNumber, chosenQuantity, finalPrice))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartModalItem)

