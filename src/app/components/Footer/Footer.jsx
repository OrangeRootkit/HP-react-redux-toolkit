import React from 'react';
import { Select } from '../UI/Select/Select';
import { Pagination } from '../Pagination/Pagination';
import s from './Footer.module.scss';

export const Footer = ({paginationLength, objFunc, selector, handleSelect, currentPage}) => {


  return (
    <div className={s.bottomLine}>
        <Pagination paginationLength={paginationLength} objFunc={objFunc} currentPage={currentPage}/>
        <div className={s.pageWrapper}>
        <span className={s.text}>Per page</span>
        <Select selector={selector} handleSelect={handleSelect}/>
        </div>
    </div>
  )
}
