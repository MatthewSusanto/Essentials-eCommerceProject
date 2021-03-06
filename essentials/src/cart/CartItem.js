import React, { Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'
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

        this.setState({
            quantity: quantity,
            subTotal: subTotal
        })

    }

    removeButton = () => {

        if (this.state.quantity > 1) {
            let quantity = parseInt(this.state.quantity) - 1
            let subTotal = (this.state.subTotal) - parseFloat(this.props.itemDetails.finalPrice)

            this.setState({
                quantity: quantity,
                subTotal: subTotal
            })

        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let prevstateplus1 = (prevState.quantity + 1)
        let prevstateremove1 = (prevState.quantity - 1)

        if (this.state.quantity === prevstateplus1) {
            this.props.addQuantity(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
        }

        if (this.state.quantity === prevstateremove1) {
            this.props.removeQuantity(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
        }
    }


    xButton = () => {
        this.props.removeFromCart(this.props.itemDetails.orderNumber, this.props.itemDetails.chosenQuantity, this.props.itemDetails.finalPrice)
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    render() {

        if (this.state.show === true) {

            return (
                <div className="itemlist">
                    <Row className="justify-content-center order-history-item align-items-center">

                        <Col lg={2}>
                            <img src={this.props.itemDetails.productImage} className="productpic" alt="images" />
                        </Col>

                        <Col lg={3} className='h3'>
                            {`${this.props.itemDetails.itemName} ${this.props.itemDetails.chosenColour.charAt(0).toUpperCase() + this.props.itemDetails.chosenColour.slice(1)}`}
                        </Col>

                        <Col lg={1} className='h5'>
                            {this.props.itemDetails.chosenSize.toUpperCase()}
                        </Col>

                        <Col lg={2} >
                            {`$${this.props.itemDetails.finalPrice}`}
                        </Col>

                        <Col lg={2} className="d-flex justify-content-center align-items-center h5">
                            <Button size="sm" disabled={(this.state.quantity === 1) ? true : false} variant="dark" className="mx-3" onClick={this.removeButton}>-</Button> {` ${this.state.quantity}x`} <Button className="mx-3" variant='dark' size="sm" onClick={this.addButton}>+</Button>
                        </Col>

                        <Col lg={2} className='h4'>
                            {`Total: $${this.state.subTotal.toFixed(2)}`}
                        </Col>

                    </Row>

                    <span><button className="xButton" onClick={this.xButton}>&times;</button></span>

                </div>

            )
        }
        else return null
    }

}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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

