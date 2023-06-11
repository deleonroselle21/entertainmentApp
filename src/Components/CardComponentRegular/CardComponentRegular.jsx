import React from 'react'
import './cardComponentRegular.css'
import bg from '../../assets/thumbnails/bottom-gear/trending/small.jpg'
import IconBookmark from '../../assets/icon-bookmark-empty.svg'
import IconPlay from '../../assets/icon-play.svg'

const CardComponentRegular = (props) => {
    return (
        <div className='cardComponentRegular__container'>
            <div style={{ position: "relative",display:"flex" }}>
                <img className='card__image' src={props.thumbnail.regular.small} alt="" />
                <div className='cardBookmark-regular'><img src={IconBookmark} alt="" /></div>
                <div className='card__play'><img src={IconPlay}></img><p>Play</p></div>
            </div>
            <div className='cardDescription-regular'>
                <div>{props.year}</div>
                <span>&#8729;</span>
                <div>{props.category}</div>
                <span>&#8729;</span>
                <div>{props.rating}</div>

            </div>
            <div className='cardTitle-regular'>{props.title}</div>

        </div>
    )
}

export default CardComponentRegular