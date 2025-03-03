import React from 'react';
import ThemeSelect from '../../components/ThemeSelect';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='bg-white text-black dark:bg-neutral-700 dark:text-white'>
      
      <Header />
      <ThemeSelect/>
      <Main />
      <Footer />
    </div>
  )
}

export default Home