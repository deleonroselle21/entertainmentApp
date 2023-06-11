import React from 'react'
import './tvComponent.css'
import data from '../../data.json'
import CardComponentRegular from '../CardComponentRegular/CardComponentRegular'

const TvComponent = () => {
  return (
    <section className='tvSeries'>
    <h1 className='main__content__header'>TV Series</h1>
    <div className='tvSeries__container'>
      


    {data.map(item => item.category==="TV Series" ? <CardComponentRegular item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} /> : null

    )
    }




</div>
</section>
  )
}

export default TvComponent