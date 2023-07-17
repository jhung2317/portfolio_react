import '../App.css'
import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Tech from '../components/Tech';
import Feedback from '../components/Feedback';


function Home() {
  return (
    <>
      <HomeBanner/>
      <Cards />
      <Tech/>
      <Feedback/>


      <Footer/>
    </>
  )
}

export default Home;