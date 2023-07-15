import React from 'react'
import { Button } from './Button'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className="footer-subscription">
        <p className="footer-subscription-header">
        © Jason Hung {new Date().getFullYear()}. All rights reserved.
        </p>
        <p className="footer-subscription-text">
        Skills icons provided by <a href='https://devicon.dev/' target='_blank'>Devicon</a> Copyright © 2015 Konpa
        </p>
        <div className='input-area'>
          <form >
          <input type="email" name="email" placeholder='Your Comment' className="footer-input" />
          <Button buttonStyle='btn--outline'>
            subscription
          </Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              TRVL
              <i class='fab fa-typo3' />
            </Link>
          </div>
          
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          <small class='website-rights'>© Jason Hung {new Date().getFullYear()}. All rights reserved.</small>
        </div>
        </section>
    </div>
  )
}

export default Footer