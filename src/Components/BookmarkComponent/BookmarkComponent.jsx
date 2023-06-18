import React from 'react'
import data from '../../data.json'
import './bookmarkcomponent.css'
import CardComponentRegular from '../CardComponentRegular/CardComponentRegular'
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent'
export const BookmarkComponent = (props) => {
    const logoMovieSource="../../assets/icon-nav-movies.svg"
    const logoTvSource="../../assets/icon-nav-tv-series.svg"
    return (
        <section className='bookmark'>
            {props.query!==""?<SearchResultComponent query={props.query} list={props.list}/>:
<div>
            <h1 className='main__content__header'>Bookmarked Movies</h1>
            <div className='bookmark__container'>



                {data.map(item => item.category === "Movie" ? item.isBookmarked ? <CardComponentRegular logo={logoMovieSource} item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} /> : null : null

                )
                }




            </div>
            <h1 className='main__content__header'>Bookmarked TV Series</h1>
            <div className='bookmark__container'>



                {data.map(item => item.category === "TV Series" ? item.isBookmarked ? <CardComponentRegular logo={logoTvSource} item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} /> : null : null

                )
                }




            </div>
            </div>
}

        </section>
    )
}
