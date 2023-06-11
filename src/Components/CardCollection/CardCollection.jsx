import React from 'react'
import './cardCollection.css'
import CardComponent from '../CardComponent/CardComponent'

const CardCollection = (props) => {
  return (
    <div >
    
        {props.item.map(item=><CardComponent title={item.title}/>)}
    </div>
  )
}

export default CardCollection