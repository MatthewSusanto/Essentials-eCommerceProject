import React, { Component } from 'react'
import { Button, Modal, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './css/CartModal.css'
import CartModalItem from './CartModalItem'
import bag from '../navbar/images/bag.png'
import { connect } from 'react-redux'


class CartModal extends Component {

    state = {
        show: false,
        subTotal: 0
    }

    handleClose = () => {
        this.setState({
            show: false
        })
    }

    handleShow = () => {
        this.setState({
            show: true
        })
    }

    handleSubtotal = (total) => {
        this.setState({
            subTotal1: total
        })
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


    render() {

        const { totalAmount, items, subTotal } = this.props;

        return (
            <div>

                <div className="bagDiv" onClick={this.handleShow}>
                    <img src={bag} className="bagImg" />
                    <p className="bagItems">{totalAmount}</p>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose} size="lg" className="right">

                    <Modal.Header closeButton className="h2">
                        Shopping Bag ({totalAmount})
                    </Modal.Header>

                    <Modal.Body>
                        <Container className="modal-container">
                            {items.map((e) =>
                                <CartModalItem itemDetails={e} subTotal={this.handleSubtotal} modalSubtotal={this.state.subTotal} />
                            )}
                        </Container>
                    </Modal.Body>

                    <Modal.Footer>
                        <Container fluid>
                            <Row className="h1 d-flex justify-content-end mr-2">
                                Total: ${subTotal.toFixed(2)}
                            </Row>

                            <Row>
                                <Button className="m-2" variant="primary" block size="lg" onClick={this.handleClose}>
                                    Continue Shopping
                            </Button>
                            </Row>

                            <Link to="/cart" onClick={this.handleClose}>
                                <Row>
                                    <Button className="m-2" variant="success" block size="lg">
                                        Check Out
                                    </Button>
                                </Row>
                            </Link>
                        </Container>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }
}

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


const mapStateToProps = (state) => {
    return {
        totalAmount: state.cart.totalAmount,
        items: state.cart.items,
        subTotal: state.cart.subTotal
    }
}

export default connect(mapStateToProps)(CartModal)

