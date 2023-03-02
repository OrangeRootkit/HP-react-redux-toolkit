import React from 'react';
import s from './Main.module.scss';

export const Main = ({children}) => {
  return (
    <main>
    <div className={s.wrapper}>
        <div className={s.grid}>
            {children}
        </div>
    </div>

</main>
  )
}
