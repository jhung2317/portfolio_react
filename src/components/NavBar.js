import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import "../css/NavBar.css"


function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 860) {
      setButton(false);
    } else {
      setButton(true);
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
            My Space<i className='fab fa-typo3'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/project' className='nav-links' onClick={closeMobileMenu}>
                Project
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/skills' className='nav-links' onClick={closeMobileMenu}>
                Tech Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/feedback' className='nav-links-mobile' onClick={closeMobileMenu}>
                Feedback
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Feedback</Button>}
        </div>
      </nav>
    </>
  )
}

export default NavBar