import React, { useState } from 'react'
import './navbar.css'
import IconBookmark from '../../assets/icon-nav-bookmark.svg'
import IconHome from '../../assets/icon-nav-home.svg'
import IconMovies from '../../assets/icon-nav-movies.svg'
import IconTvSeries from '../../assets/icon-nav-tv-series.svg'
import ImageAvatar from "../../assets/image-avatar.png"
import Logo from "../../assets/logo.svg"
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
 

    return (
        <nav className='nav__container'>
            <div className='nav__container__content'>
                <div className='nav__logo'>
                    <img src={Logo} alt="logo"></img>
                </div>
                <div className='nav__links'>

                    <NavLink to="/"> <img className="nav__item" src={IconHome} alt="" tabindex='0' /></NavLink>
                    <NavLink to="/movies"><img className="nav__item" src={IconMovies} alt="" /></NavLink>
                    <NavLink to="/tvSeries"> <img className="nav__item" src={IconTvSeries} alt="" /></NavLink>
                    <NavLink to="/bookmark"><img className="nav__item" src={IconBookmark} alt="" /></NavLink>
                </div>
                <div className='nav__profile'>
                    <img className="nav__profile__image" src={ImageAvatar} alt="" />

                </div>

            </div>



        </nav>
    )
}

export default Navbar