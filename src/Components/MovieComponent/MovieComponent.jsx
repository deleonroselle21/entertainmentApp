import React from 'react'
import './movieComponent.css'
import data from '../../data.json'
import CardComponentRegular from '../../Components/CardComponentRegular/CardComponentRegular'

const MovieComponent = () => {
    return (
        <section className='movies'>
            <h1 className='main__content__header'>Movies</h1>
            <div className='movies__container'>



                {data.map(item => item.category === "Movie" ? <CardComponentRegular item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} /> : null

                )
                }




            </div>
        </section>
    )
}

export default MovieComponent