import React from 'react'
import './searchfield.css'

import IconSearch from "../../assets/icon-search.svg";
const SearchField = (props) => {
    return (
        <div className='main__searchfield'>
            <img src={IconSearch}></img>
            <input onChange={props.onChange} type="text" placeholder='Search for movies or TV Series' />
        </div>
    )
}

export default SearchField