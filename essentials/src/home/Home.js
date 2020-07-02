import React from 'react'
import Hero from './Hero'
import Ourstory from './Ourstory'
import Newsletter from './Newsletter'
import Timeline from './Timeline'
import BestsellerHome from './BestsellerHome'
import SaleHome from './SaleHome'
import './css/Hero.css'


function Home() {



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

export default Home
