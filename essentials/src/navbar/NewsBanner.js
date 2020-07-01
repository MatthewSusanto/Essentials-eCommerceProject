import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import './css/NewsBanner.css'

class NewsBanner extends Component {


    state = {
        showing: true
    }


    xButton = () => {

        this.setState({
            showing: false
        })
    }


    render() {

        const { showing } = this.state;

        if (showing == true) {

            return (

                <div className="carouselDiv">

                    <Carousel fade={true} indicators={false} controls={false} interval={2700}>
                        <Carousel.Item>
                            <div className="banner"> DUE TO COVID-19, FULFILLMENT AND SHIPMENT MIGHT TAKE LONGER THAN USUAL </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="banner"> FREE SHIPPING ON ORDERS OVER $100 CAD </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="banner"> USE PROMO CODE "<strong className='text-danger'>SUMMER10</strong>" FOR 10% OFF YOUR PURCHASE </div>
                        </Carousel.Item>
                    </Carousel>

                    <button className="xButton" onClick={this.xButton}>&times;</button>
                </div>
            )
        }

        else return null;

    }
}

export default NewsBanner
