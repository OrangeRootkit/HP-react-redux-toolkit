import React from 'react';
import heart from './Image/heart.svg';
import { Link } from 'react-router-dom';
import './BtnLink.scss';

export const BtnLink = () => {
  
    return (
    <Link to="/like"  className={'showLike'} >
        <img className={'heart'} src={heart} />
        <p>Show Liked</p>
    </Link>
  )
}
