import React from 'react'
import '../css/Tech.css'
import SkillsList from '../data/SkillsList'
import SkillItem from './SkillItem'

function Tech() {
const frontEndArr = SkillsList.filter( x => x.title === 'Front-End')
const backEndArr = SkillsList.filter( x => x.title === 'Back-End')
const othersArr = SkillsList.filter( x => x.title === 'Other Softwares')

  return (
    <div className='tech__container' id='tech'>
      <h1 className="tech__title">
        My Skills
      </h1>
      <div className='skill__container'>
        {frontEndArr.map(skill => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>
      <div className='skill__container'>
        {backEndArr.map(skill => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>
      <div className='skill__container'>
        {othersArr.map(skill => (
          <SkillItem
            key={skill.title}
            title={skill.title}
            icon={skill.icon}
            description={skill.description}
          />
        ))}
      </div>


    </div>
  )
}

export default Tech