import React from 'react'
import './cardComponent.css'
import bg from '../../assets/thumbnails/bottom-gear/trending/small.jpg'
import IconBookmark from '../../assets/icon-bookmark-empty.svg'

const CardComponent = (props) => {
    
    let url;
    if(props.trending){
        url=props.thumbnail.trending.small;

    }else
    url=props.thumbnail.regular.small;

    console.log(url);


    return (
        <div className='card__container' style={{ backgroundImage: "url('" + url + "')" }}>
            {/* <img src={require("../../assets/thumbnails/bottom-gear/trending/small.jpg")} alt="" />*/}
            <div className='card__bookmark'><img src={IconBookmark} alt="" /></div>
            <section className='card__container__description'>


                <div className='card__movie__description'>
                    <div>{props.year}</div>
                    <span>&#8729;</span>
                    <div>{props.category}</div>
                    <span>&#8729;</span>
                    <div>{props.rating}</div>

                </div>
                <div className='card__movie__title'>{props.title}</div>


            </section>





        </div>
    )
}

export default CardComponent