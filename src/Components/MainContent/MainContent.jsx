import React,{useState} from 'react'
import './mainContent.css'
import IconSearch from "../../assets/icon-search.svg";
import data from "../../data.json"
import CardCollection from '../CardComponent/CardComponent';
import CardComponent from '../CardComponent/CardComponent';
import CardComponentRegular from '../CardComponentRegular/CardComponentRegular';
import SearchField from '../SearchField/SearchField';

const MainContent = () => {
 





    return (
        <main>
        
            {/*
            <div className='main__searchfield'>
                <img src={IconSearch}></img>
                <input type="text" placeholder='Search for movies or TV Series'/>
            </div>
    */}

            <div className='main__content'>
                <h1 className='main__content__header'>Trending</h1>
                <div className='main__content__trending scroll-container'>
                    {data.map(item=> item.isTrending?<CardComponent  item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating}/>:null
                   
                    )
                    }


                </div>
                <h1 className='main__content__header'>Recommended for you</h1>

                <div className='main__content__recommended'>
                    {data.map(item=> !item.isTrending?<CardComponentRegular  item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating}/>:null
                   
                    )
                    }


                </div>
              

            </div>

        </main>
    )
}

export default MainContent