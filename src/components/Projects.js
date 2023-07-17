import React from 'react'
import ProjectItem from './ProjectItem'
import '../css/Projects.css'

function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>Check Out My Projects! </h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectItem
            src='images/img-9.jpg' text='ParkMeBike'
             label="React Native, Firebase"
            description='A mobile app built with React Native and Firebase to find bike parking when you need a snack' 
            />
            <ProjectItem
            src='images/img-3.jpg' text='Rock-Paper-Scissors-Minigame'
             label="Javascript, HTML "
             description="A minigame of Rock-Paper-Scissors. It is built by HTML and Javascript"
            />
          </ul>
          <ul className="projects__items">
            <ProjectItem
            src='images/img-2.jpg' text='BoardGames Review'
            label="React, Vite"
            description="This is one of the project in Northcoders. The project demonstrates utilising simple API integration, data CRUD, and front-end rendering techniques to create an appealing interface for users to explore reviews and comments."
            />
            <ProjectItem
            src='images/img-2.jpg' text='BoardGames Review API'
             label="RestFUL API "
            description='API built with PostgreSQL for NC Games'  
            />
            
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Projects