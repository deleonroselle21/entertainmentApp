import React, { useState } from 'react'
import './cardComponent.css'
import bg from '../../assets/thumbnails/bottom-gear/trending/small.jpg'
import IconBookmark from '../../assets/icon-bookmark-empty.svg'
import IconBookMarkFull from '../../assets/icon-bookmark-full.svg'
import IconPlay from '../../assets/icon-play.svg'
import IconMovies from '../../assets/icon-nav-movies.svg'
import IconTv from '../../assets/icon-nav-tv-series.svg'

const CardComponent = (props) => {
    const [bookmark, setBookmark] = useState(props.bookmark);
    let logo;
    if(props.category==="Movie")
    logo=IconMovies
 //   logo="../../assets/icon-nav-movies.svg"
    if(props.category==="TV Series")
    logo=IconTv
    //logo="../../assets/icon-nav-tv-series.svg"

    // console.log(props.isBookmarked)
    /*
    useEffect(() => {
       
 
        console.log(bookmark);
      },[]);
      */

    const handleBookmark = () => {
        setBookmark(bookmark => !bookmark)

        console.log(bookmark);


    }




    let url;
    if (props.trending) {
        url = props.thumbnail.trending.small;

    } else
        url = props.thumbnail.regular.small;

    //   console.log(url);


    return (
        <div className='card__container' /*style={{ backgroundImage: "url('" + url + "')" }}*/>
            <img style={{width:"100%",height:"100%"}}className='card__image' src={url} alt="" />
            <div className='card__play-trending' ><img src={IconPlay}></img><p>Play</p></div>

            {/* <img src={require("../../assets/thumbnails/bottom-gear/trending/small.jpg")} alt="" />*/}
            <div className='card__bookmark' onClick={handleBookmark} >
                {bookmark === false ? <img src={IconBookmark} alt="" /> : <img src={IconBookMarkFull} alt="" />}
            </div>
            <section className='card__container__description'>


                <div className='card__movie__description'>
                    <div>{props.year}</div>
                    <span>&#8729;</span>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"0.3rem"}}><img style={{filter:" brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(4028%) hue-rotate(153deg) brightness(114%) contrast(111%)"}} src={logo}></img><p style={{whiteSpace:"nowrap"}}>{props.category}</p></div>
                    <span>&#8729;</span>
                    <div>{props.rating}</div>

                </div>
                <div className='card__movie__title'>{props.title}</div>


            </section>





        </div>
    )
}

export default CardComponent