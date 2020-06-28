import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import { connect } from 'react-redux'
import { removeFromCart, addQuantity, removeQuantity } from '../redux/cartActions'





class CartItem extends Component {

    state = {
        quantity: this.props.itemDetails.chosenQuantity,
        show: true,
        subTotal: this.props.itemDetails.chosenQuantity * parseFloat(this.props.itemDetails.finalPrice)


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



    xButton = () => {
        this.props.removeFromCart(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
    }


    render() {

        if (this.state.show == true) {


            return (
                <div className="itemlist">

                    <Row className="justify-content-center order-history-item align-items-center">

                        <Col lg={2}>
                            <img src={boomer} className="productpic" />
                        </Col>
                        <Col lg={4} className='h3'>
                            {`${this.props.itemDetails.itemName} ${this.props.itemDetails.chosenColour.charAt(0).toUpperCase() + this.props.itemDetails.chosenColour.slice(1)}`}
                        </Col>
                        <Col lg={1} className='h5'>
                            {this.props.itemDetails.chosenSize.toUpperCase()}
                        </Col>

                        <Col lg={2} >
                            {`$${this.props.itemDetails.finalPrice}`}

                        </Col>

                        <Col lg={1}>
                            <div onClick={this.addButton}>+</div> {` ${this.state.quantity}X`} <div onClick={this.removeButton}>+</div>
                        </Col>

                        <Col lg={2} className='h4'>
                            {`Total: $${this.state.subTotal}`}

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
        totalAmount: state.cart.totalAmount,
        theCart: state.cart
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (orderNumber, chosenQuantity, finalPrice) => dispatch(removeFromCart(orderNumber, chosenQuantity, finalPrice)),
        addQuantity: (orderNumber, chosenQuantity, finalPrice) => dispatch(addQuantity(orderNumber, chosenQuantity, finalPrice)),
        removeQuantity: (orderNumber, chosenQuantity, finalPrice) => dispatch(removeQuantity(orderNumber, chosenQuantity, finalPrice))

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartItem)

