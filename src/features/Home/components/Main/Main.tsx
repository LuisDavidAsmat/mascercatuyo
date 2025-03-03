import React from 'react'
import './Main.css'
import NavBar from './components/NavBar'
import { Link } from 'react-router'
import HorizontalSlider from './components/HorizontalSlider/HorizontalSlider'
import Testimonials from './components/Testimonials/Testimonials';
import ImgHolder from '../../../../components/ImgHolder'
import TopProvider from './components/TopProvider/TopProvider'
import HeroSection from './components/HeroSection/HeroSection'
import CTA from './components/CTA/CTA'

type Props = {}

const Main = (props: Props) => {
  return (
    <main className='bg-black px-16 gradient-background text-white'>
        <NavBar />
        <HeroSection />
        <CTA />
        <HorizontalSlider/>
        <TopProvider/>    
        <Testimonials/>
    </main>
  )
}

export default Main