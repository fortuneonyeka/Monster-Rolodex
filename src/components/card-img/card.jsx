import React from 'react'
import card from './card.css'

function Card(props) {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.monster.id}?set=set2&size= 180x180`} alt="monster" />
  <h2>{props.monster.name}</h2> 
    <span>{props.monster.email}</span>
    <span>{props.monster.username}</span>
    <span>{props.monster.address.street}</span>
    </div>
  )
}

export default Card
