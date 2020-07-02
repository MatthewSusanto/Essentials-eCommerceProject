import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'

import './css/SignIn.css'



class OrderHistory extends Component {

    state = {
        subTotal: this.props.itemDetails.chosenQuantity * parseFloat(this.props.itemDetails.finalPrice)
    }





    render() {


        return (
            <div className="itemlist">

                <Row className="justify-content-center order-history-item align-items-center">
                    <Col lg={2}>
                        <img src={this.props.itemDetails.productImage} className="productpic" />
                    </Col>

                    <Col lg={4} className="h3">
                        {`${this.props.itemDetails.itemName} ${this.props.itemDetails.chosenColour.charAt(0).toUpperCase() + this.props.itemDetails.chosenColour.slice(1)}`}
                    </Col>

                    <Col lg={1} className="h3">
                        {this.props.itemDetails.chosenSize.toUpperCase()}
                    </Col>

                    <Col lg={2}>
                        {`$${this.props.itemDetails.finalPrice}`}

                    </Col>

                    <Col lg={1} className="h5">
                        {` ${this.props.itemDetails.chosenQuantity}x`}
                    </Col>

                    <Col lg={2} className='h4'>
                        {`Total: $${this.state.subTotal.toFixed(2)}`}

                    </Col>
                </Row>

            </div>
        )
    }
}

export default OrderHistory

