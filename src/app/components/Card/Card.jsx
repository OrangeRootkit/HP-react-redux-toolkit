import React from 'react';
import s from './Card.module.scss';
import plug from './image/plug.png';
import heartFill from './image/heartFill.svg';
import heartEmpty from './image/heartEmpty.svg';

export const Card = ({image, name, actor, gender, house, core, alive, makeLike, isLike, makeDislike}) => {
    
    return (
    <>
    <div className={s.card}>
    <div className={s.image__wrapper}>
        <img className={s.image} src={image!==''? image : plug} alt="pic"/>
        <img className={s.like} src={isLike? heartFill : heartEmpty} alt='like' onClick={()=> isLike? makeDislike(name) : makeLike(name)}/>
    </div>
    <div className={s.card__text}>
        <p className={s.text__name}>{name}</p>
        <p className={s.text__discription}>Actor: {actor}</p>
        <p className={s.text__discription}>Gender: {gender}</p>
        <p className={s.text__discription}>House: {house}</p>
        <p className={s.text__discription}>Wand core: {core}</p>
        <p className={s.text__discription}>Alive: {alive===true?'yes':'no'}</p>
    </div>
    </div>
    </>
    )
}


