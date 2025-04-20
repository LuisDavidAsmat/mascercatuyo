import NavBar from './components/NavBar'
import Testimonials from './components/Testimonials/Testimonials';
import TopProvider from './components/TopProvider/TopProvider'
import HeroSection from './components/HeroSection/HeroSection'
import CTA from './components/CTA/CTA'
import HorizontalSlider from './components/HorizontalSlider/HorizontalSlider';


const Main = () => {
  return (
    <main className='bg-black px-16 gradient-background text-white'>
        <NavBar />
        <HeroSection />
        <CTA />
        <HorizontalSlider />
        <TopProvider/>    
        <Testimonials/>
    </main>
  )
}

export default Main