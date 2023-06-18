import React from 'react'
import './tvComponent.css'
import data from '../../data.json'
import CardComponentRegular from '../CardComponentRegular/CardComponentRegular'
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent'


const TvComponent = (props) => {
    const logoSource="../../assets/icon-nav-tv-series.svg"
  return (
    <section className='tvSeries'>

{props.query!==""?<SearchResultComponent query={props.query} list={props.list}/>:
<div>
    <h1 className='main__content__header'>TV Series</h1>
    <div className='tvSeries__container'>
      


    {data.map(item => item.category==="TV Series" ? <CardComponentRegular logo={logoSource} item={item} trending={item.isTrending} bookmark={item.isBookmarked} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} /> : null

    )
    }




</div>
</div>
}
</section>
  )
}

export default TvComponent