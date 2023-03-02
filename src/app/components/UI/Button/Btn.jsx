import React from 'react';
import './Btn.scss';

export const Btn = ({className, text, changePage, value}) => {

  return (
    <button className={className} value={value} onClick={(e)=>changePage(e)}>
      {text}
    </button>
  )
}
