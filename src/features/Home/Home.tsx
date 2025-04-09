import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


const Home = () => 
{
  return (
    <div className='w-full bg-white text-black dark:bg-neutral-700 dark:text-white'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home