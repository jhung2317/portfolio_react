import React from 'react'
import { Link } from 'react-router-dom'
import "../css/SkillIttem.css"

function SkillItem(props) {
  return (
    <div className='skills_item'>
      <div className='skills_icon'>
        icon
      </div>
      <h1 className='skills_name'>
        title
      </h1>
      <p>description</p>
  </div>
  
  )
}

export default SkillItem