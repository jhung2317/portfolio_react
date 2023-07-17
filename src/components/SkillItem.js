import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Tech.css"

function SkillItem({title, icon, description}) {
  return (
    <div className='skill__item'>
        {icon}
      <h1 className='skill__name'>
        {title}
      </h1>
      <p>{description}</p>
  </div>
  
  )
}

export default SkillItem