import React from 'react'
import data from '../../data.json'
import './bookmarkcomponent.css'
import CardComponentRegular from '../CardComponentRegular/CardComponentRegular'
export const BookmarkComponent = () => {
    return (
        <section className='bookmark'>
            <h1 className='main__content__header'>Bookmarked Movies</h1>
            <div className='bookmark__container'>



                {data.map(item => item.category === "Movie" ? item.isBookmarked ? <CardComponentRegular item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} /> : null : null

                )
                }




            </div>
            <h1 className='main__content__header'>Bookmarked TV Series</h1>
            <div className='bookmark__container'>



                {data.map(item => item.category === "TV Series" ? item.isBookmarked ? <CardComponentRegular item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} /> : null : null

                )
                }




            </div>

        </section>
    )
}
