import React from 'react'
import './Home.css'
import Header from './Header/index'
import Footer from './Footer/index'
import Section from './Section/Section'
import Section2 from './Section2/Section2'
import Cards from './Cards'
import Slider from './Slider/Slider'

const Home = () => {
    return (
        <>
            <Header />
            <Footer />
            <Section />
            <Section2 />
            <Cards />
            <Slider />
        </>
    )
}

export default Home
