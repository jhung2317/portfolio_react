import React from 'react'
import '../App.css'
import { Button } from './Button'
import '../css/HomeBanner.css'
import Typewriter from 'typewriter-effect';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function HomeBanner() {
  return (
    <div className='container' id='banner'>
      <video src="./videos/video-1.mp4" autoPlay loop muted/>
      <h1> Hi, I am Jason </h1>

      <div className='typewriter'>
        <p> I am a </p>
        <Typewriter
          options={{
          strings: ['Mechanical Engineer', 'Programmer','Snowboarder','Foodie', 'Coffee Addict' ],
          autoStart: true,
          loop: true,
        }}
      /></div>
      <div className='home-btns'>
      <AnchorLink href='#projects'>
        <Button 
          className='btn'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          type='submit'
          >
            Start!
        </Button>
      </AnchorLink >
      
      </div>
    </div>
  )
}

export default HomeBanner;