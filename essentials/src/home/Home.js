import React, { Component } from 'react'

import Hero from './Hero'
import Ourstory from './Ourstory'
import Newsletter from './Newsletter'
import Footer from '../footer/Footer'
import Timeline from './Timeline'



class Home extends Component {

    state = {

    }





    render() {


        return (
            <div >


                <Hero />
                <Ourstory />
                <Timeline />
                <Newsletter />
                <Footer />



            </div>
        )
    }
}

export default Home
