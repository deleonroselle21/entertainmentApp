import React from 'react'
import './searchfield.css'

import IconSearch from "../../assets/icon-search.svg";
const SearchField = () => {
    return (
        <div className='main__searchfield'>
            <img src={IconSearch}></img>
            <input type="text" placeholder='Search for movies or TV Series' />
        </div>
    )
}

export default SearchField