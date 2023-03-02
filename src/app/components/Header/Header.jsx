import React from 'react';
import s from './Header.module.scss';

export const Header = ({children}) => {
  return (
    <>
    <header className={s.header}>
        <div className={s.wrapper}>
            <h1 className={s.title}>Harry Potter</h1>
            <p className={s.subtitle}>View all characters from the Harry Potter universe</p>
            <div className={s.input__wrapper}>
                    {children}
            </div>
            <div className={s.line}></div>
        </div>
    </header>
    </>
  )
}
