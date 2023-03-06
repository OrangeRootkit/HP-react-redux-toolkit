import React from 'react'
import s from './Select.module.scss'

export const Select = ({selectValue, handleSelect, selector, version, selectDefaultValue}) => {


  return (
    <>
    <div>
    {(version === 'house') && <label htmlFor="select" className={s.select__label}>School</label>}
    <select className={s.select} defaultValue={selectDefaultValue} value={selectValue} onChange={(e)=>{handleSelect(e)}}>Select
      {selector.map((el,i)=> <option key={i} className="select__option" value={el}>{el}</option> )}
    </select>
    </div>
    </>
  )
}
