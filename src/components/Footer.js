import React from 'react'
import '../css/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <section className="footer">
      <div class='social-media-wrap'>
        <div class='social-icons'>
          <Link
            class='social-icon'
            to='https://www.facebook.com/chiman.hung.7/?locale=en_GB'
            target="_blank" rel="noopener noreferrer"
            aria-label='Facebook'
          >
            <i class='fab fa-facebook-f' />
          </Link>
          <Link
            class='social-icon'
            to='/'
            target="_blank" rel="noopener noreferrer"
            aria-label='Instagram'
          >
            <i class='fab fa-instagram' />
          </Link>
          
          <Link
            class='social-icon'
            to='https://github.com/jhung2317'
            target="_blank" rel="noopener noreferrer"
            aria-label='github'
          >
            <i class='fab fa-github' />
          </Link>
          <Link
            class='social-icon'
            to='https://www.linkedin.com/in/jasonhung2317/'
            target="_blank" rel="noopener noreferrer"
            aria-label='LinkedIn'
          >
            <i class='fab fa-linkedin' />
          </Link>
        </div>

        <small class='website-rights'>© Jason Hung {new Date().getFullYear()}. All rights reserved.</small><br/>
        <small className="footer-text">
        Skills icons provided by <a href='https://devicon.dev/' target="_blank" rel="noopener noreferrer" >Devicon</a> Copyright © 2015 Konpa
        </small>

      </div>
    </section>
  )
}

export default Footer