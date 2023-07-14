import React from 'react'
import CardItem from './CardItem'
import '../css/Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out My Projects! </h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
            src='images/img-9.jpg' text='ParkMeBike'
            path="/project" label="React Native, Firebase"
            />
            <CardItem
            src='images/img-2.jpg' text='BoardGames Review API'
            path="/project" label="RestFUL API "
            />
          </ul>
          <ul className="cards__items">
            <CardItem
            src='' text='project name'
            path="/project" label="React Native, Firebase"
            />
            <CardItem
            src='' text='project name'
            path="/project" label="RestFUL API "
            />
          </ul>
          
        </div>
      </div>
    </div>
  )
}

export default Cards