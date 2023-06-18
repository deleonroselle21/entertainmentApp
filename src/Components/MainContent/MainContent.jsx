import React,{useState} from 'react'
import './mainContent.css'
import IconSearch from "../../assets/icon-search.svg";
import data from "../../data.json"
import CardCollection from '../CardComponent/CardComponent';
import CardComponent from '../CardComponent/CardComponent';
import CardComponentRegular from '../CardComponentRegular/CardComponentRegular';
import SearchField from '../SearchField/SearchField';
import SearchResultComponent from '../SearchResultComponent/SearchResultComponent';

const MainContent = (props) => {
    const logoMovieSource="../../assets/icon-nav-movies.svg"
    const logoTvSource="../../assets/icon-nav-tv-series.svg"
 

console.log(props.query);


    return (
        <main>
  
            {/*
            <div className='main__searchfield'>
                <img src={IconSearch}></img>
                <input type="text" placeholder='Search for movies or TV Series'/>
            </div>
    */}
    {props.query!==""?<SearchResultComponent query={props.query} list={props.list}/>:

            <div className='main__content'>
          
       
                <h1 className='main__content__header'>Trending</h1>
                <div className='main__content__trending scroll-container'>
                    {data.map(item=> item.isTrending?<CardComponent  item={item} trending={item.isTrending} bookmark={item.isBookmarked} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating}/>:null
                   
                    )
                    }


                </div>
                <h1 className='main__content__header'>Recommended for you</h1>

                <div className='main__content__recommended'>
                    {data.map(item=> !item.isTrending?<CardComponentRegular logoMovie={logoMovieSource} logoTv={logoTvSource} item={item} trending={item.isTrending} category={item.category} title={item.title} thumbnail={item.thumbnail} year={item.year} rating={item.rating} bookmark={item.isBookmarked}/>:null
                   
                    )
                    }


                </div>
              

            </div>
}

        </main>
    )
}

export default MainContent