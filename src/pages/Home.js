import '../App.css'
import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Projects from './Projects';
import Tech from './Tech';
import Feedback from './Feedback';

function Home() {
  return (
    <>
      <HomeBanner/>
      <Cards />
      <Projects />
      <Tech />
      <Feedback/>
      <Footer/>
    </>
  )
}

export default Home;