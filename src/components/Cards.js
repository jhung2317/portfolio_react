import React from 'react'
import CardItem from './CardItem'
import '../css/Cards.css'

function Cards() {
  return (
    <div className='cards' id='projects'>
      <h1>Check Out My Projects! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src='images/img-9.jpg' text='ParkMeBike'
             label="React Native, Firebase"
            description='A mobile app built with React Native and Firebase to find bike parking when you need a snack' 
            />
            <CardItem
            src='images/img-3.jpg' text='Rock-Paper-Scissors-Minigame'
             label="RestFUL API "
             description="A minigame of Rock-Paper-Scissors. It is built by HTML and Javascript"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
            src='images/img-1.jpg' text='BoardGames Review'
            label="Javascript"
            description="This is one of the project in Northcoders. The project demonstrates utilising simple API integration, data CRUD, and front-end rendering techniques to create an appealing interface for users to explore reviews and comments."
            />
            <CardItem
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

export default Cards