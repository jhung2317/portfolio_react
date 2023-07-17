import React from 'react'
import CardItem from './CardItem'
import '../css/Projects.css'

function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>Check Out My Projects! </h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <CardItem
            src='images/img-9.jpg' text='ParkMeBike'
             label="React Native, Firebase"
            />
            <CardItem
            src='images/img-2.jpg' text='BoardGames Review API'
             label="RestFUL API "
            />
          </ul>
          <ul className="projects__items">
            <CardItem
            src='' text='project name'
             label="React Native, Firebase"
            />
            <CardItem
            src='' text='project name'
             label="RestFUL API "
            />
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Projects