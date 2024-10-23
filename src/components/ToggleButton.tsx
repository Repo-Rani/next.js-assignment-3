import React from 'react'
import { toggleButtonType } from '../../Types/types'
import Link from 'next/link'
function ToggleButton({isOpen, toggleMenu}: toggleButtonType ) {
  return (
    <>
    <div className={`mobile-nav-menu ${isOpen ? "active" : ""}`}
    onClick={toggleMenu}>
        
<div className='mobile-nav-Container'>
         
          <ul>
            <li>
              <Link href="#home" className="nav-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" className="nav-menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#education" className="nav-menu-item">
                Education
              </Link>
            </li>
            <li>
              <Link href="#experience" className="nav-menu-item">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="nav-menu-item">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="nav-menu-item">
                Contact
              </Link>
            </li>
            <button className="resume-btn">Download Resume</button>
        </ul> 
        </div>
        </div>
        
    
    </>
  )
}

export default ToggleButton;