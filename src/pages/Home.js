import '../App.css'
import React from 'react'
import HomeBanner from '../components/HomeBanner'
import Cards from '../components/Cards';

function Home() {
  return (
    <>
      <HomeBanner/>
      <Cards />
    </>
  )
}

export default Home;