import React, {useState, useEffect} from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import { Button } from './Button';
import "../css/NavBar.css"
import AnchorLink from 'react-anchor-link-smooth-scroll';


function NavBar() {
  const [click, setClick] = useState(false);
  const [smallScreen, setSmallScreen] = useState(true);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 860) {
      setSmallScreen(false);
    } else {
      setSmallScreen(true);
    }
  }

  useEffect(() =>  {
    showButton();
  },[])

  // whenever the screen is sized, invoke showButton
  window.addEventListener('resize', showButton)

  
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            My Space
            {/* <i className='fab fa-typo3'/> */}
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
            <AnchorLink href='#banner' className='nav-links' onClick={closeMobileMenu}>
                Home
            </AnchorLink>
            </li>
            <li className='nav-item'>
            <AnchorLink href='#projects' className='nav-links' onClick={closeMobileMenu}>
                Projects
            </AnchorLink>
            </li>
            <li className='nav-item'>
            <AnchorLink href='#tech' className='nav-links' onClick={closeMobileMenu}>
                Tech Skills
            </AnchorLink>
            </li>
            <li className='nav-item'>

              <AnchorLink href='#feedback' className='nav-links-mobile' onClick={closeMobileMenu}>
                Feedback
              </AnchorLink>
            </li>
          </ul>
          {smallScreen && <AnchorLink href='#feedback'><Button buttonStyle='btn--outline'>Feedback</Button></AnchorLink>}
        </div>
        
      </nav>
    </>
  )
}

export default NavBar