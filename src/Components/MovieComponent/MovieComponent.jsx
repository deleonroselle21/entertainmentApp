import React from 'react'
import './movieComponent.css'
import data from '../../data.json'
import CardComponentRegular from '../../Components/CardComponentRegular/CardComponentRegular'
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent'
//import logoImage from '../../assets/icon-nav-movies.svg'
import logoImage from '../../assets/icon-nav-movies.svg'

const MovieComponent = (props) => {
    const logoSource="../../assets/icon-nav-movies.svg";
    console.log(logoImage)
    return (
        <section className='movies'>
            
             {props.query!==""?<SearchResultComponent query={props.query} list={props.list}/>:

<div>
<h1 className='main__content__header'>Movies</h1>
            <div className='movies__container'>



                {data.map(item => item.category === "Movie" ? <CardComponentRegular  logo={logoSource} item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} bookmark={item.isBookmarked} /> : null

                )
                }




            </div>
            </div>
}
        </section>
    )
}

export default MovieComponent