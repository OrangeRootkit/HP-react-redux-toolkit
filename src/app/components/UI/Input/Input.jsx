import React from 'react';
import s from './Input.module.scss';

export const Input = ({inputValue, handleInput}) => {
  return (
    <div>
      <label htmlFor="input" className={s.input__label}>Name</label>
      <input className={s.input} placeholder='Enter name' value={inputValue} onChange={(e)=>handleInput(e)}/>
    </div>
  )
}
