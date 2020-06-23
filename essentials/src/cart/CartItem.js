import React, { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import ProductShowcase from '../products/ProductShowcase'
import Pagination from '../pagination/PaginationComp'
import boomer from '../products/images/tees2.PNG'





class CartItem extends Component {

    state = {
        quantity:1,
        show:true

    }


    addButton=()=>{
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    removeButton=()=>{
        if(this.state.quantity > 1){
        this.setState({
            quantity: this.state.quantity - 1
        })
    }
    }

    xButton=()=>{
        this.setState({
            show:false
        })
    }


    render() {

        if(this.state.show == true) {


        return (
            <div className="itemlist">
        
            <Row className="justify-content-center order-history-item align-items-center">
             
                            <Col lg={2}>
                                <img src={boomer} className="productpic" />
                            </Col>
                            <Col lg={4}>
                                Talisman Necklace - Quartz Crystal
                            </Col>
                            <Col lg={2}>
                                L
                            </Col>
                            <Col lg={1} className="d-flex justify-content-center">
                            <button className="qtyBtn" onClick={this.removeButton}>
                                -
                            </button>

                            <div className="quantity">
                            {this.state.quantity}
                            </div>
                     
                            <button className="qtyBtn" onClick={this.addButton}>
                                +
                            </button>
                     
                             
                            </Col>
                            <Col lg={2}>
                                $68.13 CAD
                           
                            </Col>
                        </Row>
                

                        <span><button className="xButton" onClick={this.xButton}>&times;</button></span>
                        </div>
        )
    }
    else return null
}

}

export default CartItem

