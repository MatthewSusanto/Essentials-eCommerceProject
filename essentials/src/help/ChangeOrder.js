import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import './help.css'





class ChangeOrder extends Component {

    state = {

    }





    render() {


        return (
            <div className="help-div">




                <Container className=" d-flex align-items-center">
                    <Row>
                        <h5>
                            CHANGING/MODIFYING AN ORDER
                        </h5>
                        <h5>
                            We are unable to change/modify orders once they have already been placed. You will have to cancel the entire order for you to re-order. If you would like to do so you have 15 minutes after you place your order to cancel. Please cancel your order through your email confirmation, account or the confirmation page after placing order. DO NOT email us about canceling your order.
                            </h5>
                    </Row>



                </Container>







            </div>
        )
    }
}

export default ChangeOrder

