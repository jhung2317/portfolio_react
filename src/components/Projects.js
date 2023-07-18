import React from 'react'
import ProjectItem from './ProjectItem'
import '../css/Projects.css'
import { parkMeBikeSlides } from '../data/parkmebikeslides'
import { rpsSlides } from '../data/rock-paper-scissors-slides'
import { frontendSlides } from '../data/frontendProject'
import { backendSlides } from '../data/backendProject'


function Projects() {
  return (
    <div className='projects' id='projects'>
      <h1>Check Out My Projects! </h1>
      <div className="projects__container">
        <div className="projects__wrapper">
          <ul className="projects__items">
            <ProjectItem
            slides={parkMeBikeSlides}
            src='images/img-9.jpg' text='ParkMeBike'
            label="React Native, Firebase"
            description='A mobile app built with React Native and Firebase to find bike parking when you need a snack' 
            />
            <ProjectItem
            slides={rpsSlides}
            src='images/img-3.jpg' text='Rock-Paper-Scissors-Minigame'
             label="Javascript, HTML "
             description="A minigame of Rock-Paper-Scissors. It is built by HTML and Javascript"
            />
          </ul>
          <ul className="projects__items">
            <ProjectItem
            slides={frontendSlides}
            src='images/img-2.jpg' text='Boardgames Review'
            label="React, Vite"
            description="This is one of the projects in Northcoders. The project demonstrates utilising simple API integration, data CRUD, and front-end rendering techniques to create an appealing interface for users to explore reviews and comments."
            />
            <ProjectItem
            slides={backendSlides}
            src='images/img-2.jpg' text='Boardgames Review API'
             label="RestFUL API "
            description='API built with PostgreSQL as a data source for Boardgames Review'  
            />
            
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Projects