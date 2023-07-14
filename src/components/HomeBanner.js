import React from 'react'
import '../App.css'
import { Button } from './Button'
import '../css/HomeBanner.css'
import Typewriter from 'typewriter-effect';

function HomeBanner() {
  return (
    <div className='container'>
      <video src="./videos/video-2.mp4" autoPlay loop muted/>
      <h1> Hi </h1>
      <div className='typewriter'>
        <p> Hello, I am a </p>
        <Typewriter
          options={{
          strings: ['Mechanical Engineer', 'Programmer','Snowboarder','Foodie' ],
          autoStart: true,
          loop: true,
        }}
      /></div>
      <div className='home-btns'>
        <Button 
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'>
            Get Started
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'>
            Get Started 2 <i className='far fa-play-circle' />
        </Button>
        <Button 
          className='btns'
          buttonStyle='btn--darkgreen'
          buttonSize='btn--large'>
            Get Started 3 
        </Button>
      
      </div>
    </div>
  )
}

export default HomeBanner;