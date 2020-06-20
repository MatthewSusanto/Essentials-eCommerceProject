import React, { Component } from 'react'

import Hero from './Hero'
import Ourstory from './Ourstory'
import Newsletter from './Newsletter'
import Footer from '../footer/Footer'
import Timeline from './Timeline'
import BestsellerHome from './BestsellerHome'



class Home extends Component {

    state = {

    }





    render() {


        return (
            <div >


                <Hero />
                <BestsellerHome />
                <Ourstory />
                <Timeline />
                <Newsletter />
                <Footer />



            </div>
        )
    }
}

export default Home
