import '../App.css'
import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import Tech from '../components/Tech';
import Feedback from '../components/Feedback';


function Home() {
  return (
    <>
      <HomeBanner />
      <Projects />
      <Tech />
      <Feedback />
      <Footer />
    </>
  )
}

export default Home;