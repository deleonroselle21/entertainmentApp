import React from 'react'
import './searchResultComponent.css'
import data from '../../data.json'
import CardComponentRegular from '../CardComponentRegular/CardComponentRegular'




const SearchResultComponent = (props) => {
    return (
        <div className='searchResult__container'>

            <h1 className='searchResult__text'>Found {props.list.length} results for '{props.query}'</h1>
            <div className='result__container'>
                {props.list.map(item => <CardComponentRegular item={item} trending={item.isTrending} bookmark={item.isBookmarked} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} />)}
            </div>
        </div>
    )
}

export default SearchResultComponent