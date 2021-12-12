import React from 'react'
import cardListstyle from './cardList.style.css'
import Card from '../card-img/card'

function CardList(props)
{
  return (
    <div>
      {/* <h1 className="page-title">Monster Roledex</h1>
      <input type="search"/> */}
      <span className='card-list'>
        {props.Monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
        </span>
    </div>
  )
}

export default CardList
