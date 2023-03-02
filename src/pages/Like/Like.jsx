import React from 'react'
import { Link } from 'react-router-dom'
import { Main } from '../../app/components/Main/Main'
import { Card } from "../../app/components/Card/Card";
import s from './Like.module.scss'


export const Like = ({filterData, makeDislike}) => {

  return (
    <>
      <Link className={s.link} to='/'>
        <p>← Back To All</p>
      </Link>
      <h1 className={s.liked}>Liked ones</h1>
      <p className={s.text}>Your favorite characters from the Harry Potter universe.</p>
      <div className={s.line}></div>
      <Main>
      {filterData
        .map((el)=><Card key={el.id} isLike={true}  core={el.wand.core} makeDislike={makeDislike} {...el}/>
        )} 
      </Main>
    </>
  )
}
