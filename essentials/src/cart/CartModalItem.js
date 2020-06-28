import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './CartModal.css'
import { connect } from 'react-redux'
import { removeFromCart, addQuantity } from '../redux/cartActions'







class CartModalItem extends Component {

    state = {

        show: true,
        totalPrice: ((this.props.itemDetails.chosenQuantity * this.props.itemDetails.finalPrice).toFixed(2)),
        previousPrice: ((this.props.itemDetails.previousPrice).toFixed(2)),
        modalSubtotal: parseInt(this.props.modalSubtotal)
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
                            <img src={boomer} className="productpic" />
                        </Col>
                        <Col className="text-left">
                            <Row className='h4' >{this.props.itemDetails.itemName}</Row>
                            <Row className='h4 text-danger'> ${this.props.itemDetails.finalPrice} </Row>
                            <Row><strike className="text-muted">{(this.props.itemDetails.discount == 0) ? ' ' : `$${this.state.previousPrice} `} </strike> &nbsp; <span className="text-success"> {(this.props.itemDetails.discount == 0) ? ' ' : `(${this.props.itemDetails.discount} % Off)`}</span> </Row>
                            <hr />
                            <Row><strong>Colour: </strong> &nbsp; {this.props.itemDetails.chosenColour.charAt(0).toUpperCase() + this.props.itemDetails.chosenColour.slice(1)}</Row>
                            <Row><strong>Size: </strong> &nbsp; {this.props.itemDetails.chosenSize.toUpperCase()}</Row>
                            <Row><strong>Quantity: </strong> &nbsp; {this.props.itemDetails.chosenQuantity}</Row>
                            <Row><strong>Total: </strong> &nbsp; {`$${this.state.totalPrice}`}</Row>


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
        removeFromCart: (orderNumber, chosenQuantity, finalPrice) => dispatch(removeFromCart(orderNumber, chosenQuantity, finalPrice))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartModalItem)

