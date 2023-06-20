import React, { useEffect, useState } from 'react'
import './cardComponentRegular.css'
import bg from '../../assets/thumbnails/bottom-gear/trending/small.jpg'
import IconBookmark from '../../assets/icon-bookmark-empty.svg'
import  IconBookMarkFull from  '../../assets/icon-bookmark-full.svg'
import IconMovies from '../../assets/icon-nav-movies.svg'
import IconTv from '../../assets/icon-nav-tv-series.svg'
import IconPlay from '../../assets/icon-play.svg'

const CardComponentRegular = (props) => {

    const [bookmark,setBookmark]=useState(props.bookmark);
    let logo;
    if(props.category==="Movie")
    logo=IconMovies
    
    if(props.category==="TV Series")
    logo=IconTv
 

    console.log(props.logo);
    
   // console.log(props.isBookmarked)
    /*
    useEffect(() => {
       

        console.log(bookmark);
      },[]);
      */

    const handleBookmark=()=>{
        setBookmark(bookmark=>!bookmark)

        console.log(bookmark);
      

    }






    return (
        <div className='cardComponentRegular__container'>
            <div className="card__mainContent" style={{ position: "relative",display:"flex" }}>
                <img className='card__image' src={props.thumbnail.regular.small} alt="" />
                <div className='cardBookmark-regular' onClick={handleBookmark}>{bookmark===false?<img src={IconBookmark} alt="" />:<img src={IconBookMarkFull} alt="" />}</div>
                <div className='card__play' ><img src={IconPlay}></img><p>Play</p></div>
              
               
            </div>
            <div className='cardDescription-regular'>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{props.year}</div>
                <span>&#8729;</span>
                <div className="cardDescription__rg__content"/*style={{display:"flex",width:"fit-content",justifyContent:"center",alignItems:"center",gap:"0.3rem"}}*/><img style={{width:"20%",height:"75%", filter:" brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(4028%) hue-rotate(153deg) brightness(114%) contrast(111%)"}} src={logo} ></img><p style={{whiteSpace:"nowrap"}}>{props.category}</p></div>
                <span>&#8729;</span>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>{props.rating}</div>

            </div>
            <div className='cardTitle-regular'>{props.title}</div>

        </div>
    )
}

export default CardComponentRegular