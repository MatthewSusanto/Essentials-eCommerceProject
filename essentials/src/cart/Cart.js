import React, { Component } from 'react'
import { Form, Button, Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import OrderHistory from '../account/OrderHistory'
import CartItem from './CartItem'
import CartModal from './CartModal'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { persistor } from '../redux/store'





class Cart extends Component {

    state = {
        promoCode: 'SUMMER10',
        promoCodeInput: null,
        promoCodeActivated: false,
        promoCodeDiscount: 10,
        promoCodeDiscountPrice: 0,
        subTotal: this.props.subTotal,
        afterDiscountPrice: 0

    }

    handlePromoCode = (e) => {
        this.setState({
            promoCodeInput: e.target.value
        })
    }

    handlePromoCodeSubmit = (e) => {
        // e.preventDefault();
        if (this.state.promoCodeInput == this.state.promoCode) {

            let promoCodeDiscountPrice = (this.state.promoCodeDiscount / 100) * this.state.subTotal
            let afterDiscountPrice = this.state.subTotal - promoCodeDiscountPrice

            this.setState({
                promoCodeActivated: true,
                promoCodeDiscountPrice: promoCodeDiscountPrice,
                afterDiscountPrice: afterDiscountPrice
            })
        }
    }



    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.subTotal !== prevState.subTotal) {
            this.handlePromoCodeSubmit()
        }

        if (this.state.subTotal !== this.props.subTotal)
            this.setState({
                subTotal: this.props.subTotal
            })
    }



    // // applyDiscount = () => {
    //     if(this.state.promoCodeActivated == true){

    //         this.setState({

    //         })
    //     }
    // }   




    render() {

        console.log(this.props.purchaseHistory)


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
                                    <h3>Promotional Code:</h3>

                                </Col>

                                <Col lg={6} className="d-flex justify-content-end">
                                    <Form className="d-flex justify-content-end">
                                        <Form.Label htmlFor="inlineFormInputName2" srOnly>
                                            Name
                                         </Form.Label>
                                        <Form.Control
                                            className="mb-2 mr-sm-2"
                                            id="inlineFormInputName2"
                                            placeholder="Enter Promo Code"
                                            onChange={this.handlePromoCode}
                                        />


                                        <Button type="submit" className="mb-2" variant={this.state.promoCodeActivated ? 'secondary' : 'primary'} disabled={(this.state.promoCodeActivated) ? true : false} onClick={this.handlePromoCodeSubmit}>
                                            {this.state.promoCodeActivated ? 'Applied' : 'Apply'}
                                        </Button>
                                    </Form>

                                </Col>
                            </Row>

                            <Row className="justify-content-center align-items-center p-1">

                                <Col lg={6} className="text-left">
                                    <h3>Total: <span className="text-success h1">{`$${(this.state.promoCodeActivated) ? (this.state.afterDiscountPrice).toFixed(2) : (this.state.subTotal).toFixed(2)}`}</span> <del className="text-danger h5"> {`${(this.state.promoCodeActivated) ? '$' + (this.state.subTotal).toFixed(2) : ''}`}</del> {`${(this.state.promoCodeActivated) ? '(' + (this.state.promoCodeDiscount) + '% Off)' : ''}`}</h3>

                                </Col>
                                <Col lg={6} className="text-right">
                                    <Link to="/account">
                                        <Button variant="success" size="lg" block  >Proceed to checkout</Button>
                                    </Link>
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
        subTotal: state.cart.subTotal,

        theCart: state.cart
    }
}



export default connect(mapStateToProps)(Cart)

