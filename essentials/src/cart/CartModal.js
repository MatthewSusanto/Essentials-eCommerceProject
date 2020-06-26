import React, { Component } from 'react'
import { Button, Modal, Form, Container, Row, Col, Nav } from 'react-bootstrap'

import account from '../navbar/images/account.png'
import { Link, BrowserRouter } from 'react-router-dom'
import './CartModal.css'
import CartModalItem from './CartModalItem'
import bag from '../navbar/images/bag.png'
import { connect } from 'react-redux'


class CartModal extends Component {

    state = {
        show: false
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




    render() {

        const { totalAmount } = this.props;


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

                            <CartModalItem />
                            <CartModalItem />
                            <CartModalItem />
                            <CartModalItem />
                            <CartModalItem />
                            <CartModalItem />
                            <CartModalItem />


                        </Container>







                    </Modal.Body>

                    <Modal.Footer>

                        <Container fluid>
                            <Row className="h2 d-flex justify-content-end mr-2">
                                Total: $25
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

const mapStateToProps = (state) => {
    return {
        totalAmount: state.cart.totalAmount
    }
}

export default connect(mapStateToProps)(CartModal)

