import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './CartModal.css'






class CartModalItem extends Component {

    state = {
        quantity: 1,
        show: true

    }


    addButton = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    removeButton = () => {
        if (this.state.quantity > 1) {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }

    xButton = () => {
        this.setState({
            show: false
        })
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
                            <Row className='h4' >Talisman Necklace - Quartz Crystal</Row>
                            <Row className='h5'> $68.13 CAD </Row>
                            <Row> was $199.12 CAD </Row>
                            <Row>Size: L</Row>
                            <Row>Quantity: 5</Row>


                        </Col>



                    </Row>


                    <span><button className="xButton" onClick={this.xButton}>&times;</button></span>
                </div>
            )
        }
        else return null
    }

}

export default CartModalItem

