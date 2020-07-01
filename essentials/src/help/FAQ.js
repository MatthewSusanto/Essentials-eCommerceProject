import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import './css/help.css'




class FAQ extends Component {

    state = {

    }





    render() {


        return (
            <div className="help-div d-flex align-items-center">

                <Container>
                    <Row>

                        <h5> Q. I want to cancel my order, what can I do?</h5>
                        <h5>A. Please cancel your order through your email confirmation, account or the confirmation page after placing order. DO NOT email us about canceling your order.
                            </h5>
                    </Row>

                    <Row>

                        <h5> Q. I put the wrong address what can I do?</h5>
                        <h5>A. Please cancel your order. You can reorder after it has been canceled. If you don't cancel within the 15 minute time frame, your order will be processed with the incorrect address.
                       </h5>
                    </Row>

                    <Row>

                        <h5> Q. I received a defective or incorrect item. </h5>
                        <h5>A. If we made a mistake with your order, or if there is an issue, then please email us through the contact page on the site. If you received a defective item, then please provide a photo of the issues you are referring too, and if you received an incorrect item, then please provide an image of the incorrect item along with your packing slip.  We can then provide a return label (domestic only) if an exchange needs to be made. We must be notified of any defects within 14 days of delivery. Any claims beyond the 14 days will be considered wear and tear, and cannot be replaced.     </h5>
                    </Row>

                    <Row>

                        <h5>Q. Why was I charged Customs and Duties?</h5>
                        <h5>A. All applicable customs fees, taxes and duties are the sole responsibility of the customer. Customers are responsible for being aware of and paying any customs fees and duties charged by your country. Customs authorities require that we state the value of your order directly on your package – the value is the retail cost.  ESNTLS cannot mark any package(s) as a “Gift” in order to avoid customs and duties fees.         </h5>

                    </Row>

                    <Row>

                        <h5>Q. Why hasn't my return  been processed?</h5>
                        <h5>A. Returns/exchanged can take up to 7 business days to be processed once they have been received. We do our best to process them as quickly as possible. If your return is denied for any reason, you will be emailed, and the items will be sent back to you. Refunds generally take 1-4 business days to finalize depending on your bank. If 7 business days have passed since your return was delivered, then please message us with the tracking information for the return, and we will look into the status! </h5>
                    </Row>

                    <Row>

                        <h5>Q. Where is my order?</h5>
                        <h5>A. Due to the exceptional volumes of orders that we’re experiencing, orders may take an additional 7-10 working days to dispatch. </h5> </Row>
                </Container>



            </div>
        )
    }
}

export default FAQ

