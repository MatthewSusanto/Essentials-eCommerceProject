import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import OrderHistory from '../account/OrderHistory'
import CartItem from './CartItem'
import CartModal from './CartModal'
import { connect } from 'react-redux'



class Cart extends Component {

    state = {
        promoCode: 'SUMMER10',
        promoCodeInput: null

    }

    handlePromoCode = (e) => {
        this.setState({
            promoCodeInput: e.target.value
        })
    }

    handlePromoCodeSubmit = () => {
        if (this.state.promoCodeInput == this.state.promoCode) {
            return ()
        }
    }




    render() {


        return (
            <div>

                <Container className="account-comp my-5">







                    <Container fluid className="p-1 ">

                        <Row>
                            <Col>
                                <h4 className="display-4">Your Shopping Bag</h4>
                            </Col>
                        </Row>

                        {this.props.items.map((e) =>
                            <CartItem itemDetails={e} subTotal={(e.chosenQuantity * parseFloat(e.finalPrice))} modalSubtotal={this.state.subTotal} />
                        )}

                        {/* <CartItem /> */}


                        <Container fluid className="bg-dark text-light p-1">

                            <Row className="justify-content-center align-items-center p-1">

                                <Col lg={6} className="text-left">
                                    <h3>Promotional Code</h3>

                                </Col>

                                <Col lg={6} className="d-flex justify-content-end">
                                    <Form inline>
                                        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                            Name
                                         </Form.Label>
                                        <Form.Control
                                            className="mb-2 mr-sm-2"
                                            id="inlineFormInputName2"
                                            placeholder="Enter Promo Code"
                                            onChange={this.handlePromoCode}
                                        />


                                        <Button type="submit" className="mb-2">
                                            Apply
                                      </Button>
                                    </Form>

                                </Col>
                            </Row>

                            <Row className="justify-content-center align-items-center p-1">

                                <Col lg={6} className="text-left">
                                    <h3>Total: <span className="text-success h1">{`$${(this.props.subTotal).toFixed(2)}`}</span> <del className="text-danger h5"> $5555</del></h3>

                                </Col>
                                <Col lg={6} className="text-right">

                                    <Button variant="success" size="lg" block>Proceed to checkout</Button>
                                </Col>
                            </Row>




                        </Container>





                    </Container>



                </Container>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items,
        subTotal: state.cart.subTotal
    }
}

export default connect(mapStateToProps)(Cart)

