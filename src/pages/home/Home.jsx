import React from 'react'
import Header from '../../sections/header/Header'
import Hero from '../../sections/hero/Hero'
import Products from '../../sections/products/Products'
import Services from '../../sections/services/Services'
import Progress from '../../sections/progress/Progress'
import SuccessStories from '../../sections/successStories/SuccessStories'
import Experties from '../../sections/experties/Experties'
import EngagementModels from '../../sections/engagementModels/EngagementModels'
import ClientInfo from '../../sections/clientInfo/ClientInfo'
import Footer from '../../sections/footer/Footer'

const Home = () => {
  return (
    <div className='relative w-screen overflow-hidden'>
        <Header/>
        <Hero/>
        <Products/>
        <Services/>
        <Progress/>
        <SuccessStories/>
        <Experties/>
        <EngagementModels/>
        <ClientInfo/>
        <Footer/>
    </div>
  )
}

export default Home