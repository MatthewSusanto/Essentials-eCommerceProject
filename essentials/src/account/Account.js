import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'
import './SignIn.css'
import OrderHistory from './OrderHistory'
import { connect } from 'react-redux'
import { persistor } from '../redux/store'





class Account extends Component {

    state = {
        purged: false,
        previousState: []
    }


    componentDidMount() {

        let prevState = this.props.items

        this.setState({
            previousState: prevState
        })

        console.log(this.state)


        persistor.purge()
    }

    // componentDidUpdate(prevProps, prevState) {

    //     if (this.state.previousState == null) {
    //         this.setState({
    //             previousState: prevState.previousState
    //         })
    //     }
    //     console.log(this.state)

    // }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.previousState !== nextState.previousState) {
            return true
        }
    }


    render() {

        console.log(this.state)


        return (
            <div>

                <Container className="account-comp mt-5">


                    <Row>
                        <Col>
                            <h2 className="display-4 mt-5">Welcome Back</h2>

                        </Col>




                    </Row>





                    <Container fluid className="p-1 mt-5 ">

                        <Row>
                            <Col>
                                <h4 className="text-left">My Order History</h4>
                            </Col>
                        </Row>

                        {this.state.previousState.map((e) =>
                            <OrderHistory itemDetails={e} />
                        )}

                        {/* <OrderHistory />
                        <OrderHistory />
                        <OrderHistory />
                        <OrderHistory /> */}

                        <Row className="justify-content-center align-items-center p-1 mt-5">

                            <Col className="text-center bg-dark text-warning p-4">
                                <h3>Thank You For Shopping With Us!</h3>

                            </Col>

                        </Row>





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

export default connect(mapStateToProps)(Account
)
