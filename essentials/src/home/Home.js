import React, { Component } from 'react'

import Hero from './Hero'
import Ourstory from './Ourstory'
import Newsletter from './Newsletter'

import Timeline from './Timeline'
import BestsellerHome from './BestsellerHome'
import SaleHome from './SaleHome'



class Home extends Component {

    state = {

    }





    render() {


        return (
            <div >


                <Hero />
                <BestsellerHome />
                <Ourstory />
                <SaleHome />
                <Timeline />
                <Newsletter />




            </div>
        )
    }
}

export default Home
