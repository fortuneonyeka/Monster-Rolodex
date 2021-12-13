import React from 'react'
import cardListstyle from './cardList.style.css'
import Card from '../card-img/card'

function CardList(props)
{
  return (
    <div>
      <span className='card-list'>
        {props.monsters.map(monster => <Card key={monster.id} monster={monster}/>)}
        </span>
    </div>
  )
}

export default CardList
