import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import './css/help.css'



class Returns extends Component {

    state = {

    }





    render() {


        return (
            <div className="help-div">




                <Container>


                    <Row>
                        <h5>Returns:</h5>
                        <h5>
                            <ul>
                                <li>Our policy lasts 30 days. If 30 days have gone by since you purchased your order, unfortunately we can’t offer you a refund or exchange.
                                </li>
                                <li>If the return/exchange does not pass inspection, it will be mailed back to you.</li>
                                <li>Please return the item in the condition it was packaged and sent with original packaging. If there is excessive wrinkling and damage to the bag, the return is subject to DENIAL. </li>
                                <li>All items must be unworn and unwashed.</li>
                                <li>Original tags must be attached.</li>
                                <li>Items covered in animal/human hair will NOT be accepted.</li>
                                <li>Items that smell like smoke, cologne, or deodorant cannot be accepted.</li>
                                <li>It may take up to 7 -10 business days for returns to be processed.</li>
                                <li>A restocking fee of 15% will be applied to any international package that gets returned due to rejection, duties & taxes or incorrect address.</li>
                                <li>All orders that received the free underwear or socks that are returned without the underwear or socks will be charged the cost of the free product from their refund. </li>
                                <li>ALL items on SALE are final. No refunds, returns or exchanges allowed. </li>
                            </ul>
                        </h5>

                    </Row>

                    <Row>
                        <h5>Refunds (if applicable):</h5>
                        <h5>Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.
If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a 7 - 14 days.</h5>
                    </Row>

                    <Row>
                        <h5>Late or missing refunds (if applicable):</h5>
                        <h5>If you haven’t received a refund yet, first check your bank account again.
                        Then contact your credit card company, it may take some time before your refund is officially posted.
                        Next contact your bank. There is often some processing time before a refund is posted.
If you’ve done all of this and you still have not received your refund yet, please contact us</h5>
                    </Row>

                    <Row>
                        <h5>Sale items (if applicable):</h5>
                        <h5>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</h5>
                    </Row>

                    <Row>
                        <h5>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you refuse a package, the shipping will not be refunded. </h5>
                        <h5>Depending on where you live, the time it may take for your exchanged product to reach you, may vary.
                        </h5>
                        <h5>If you are shipping an item over $75, you should consider using a trackable shipping service or purchasing shipping insurance. We don’t guarantee that we will receive your returned item</h5>
                    </Row>




                </Container>








            </div>
        )
    }
}

export default Returns

