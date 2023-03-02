import React from 'react'
import { Header } from "../../app/components/Header/Header";
import { Input } from "../../app/components/UI/Input/Input";
import { Select } from "../../app/components/UI/Select/Select";
import { Main } from "../../app/components/Main/Main";
import { Card } from "../../app/components/Card/Card";
import { BtnLink } from '../../app/components/UI/BtnLink/BtnLink';
import { Footer } from "../../app/components/Footer/Footer";

export const Home = ({ tempData, inputValue, selectValue, house, isLike, paginationLength, objFunc, selectorPages, currentPage, handleSelect, handleInput, cardsOnPage, makeLike, makeDislike}) => {


    return (
    <>

    <Header>
        <Input value={inputValue} handleInput={handleInput}/>
        <Select value={selectValue} handleSelect={handleSelect} selector={house} version={'house'}/>
    </Header>
    <Main>
        
        {tempData
        .map((el)=><Card key={el.id} isLike={isLike.includes(el.name)? true: false} makeLike={makeLike} makeDislike={makeDislike} core={el.wand.core} {...el}/>
        )} 

        <BtnLink/>
    </Main>
    <Footer paginationLength={paginationLength}  objFunc={objFunc} selector={selectorPages} currentPage={currentPage} handleSelect={cardsOnPage}/>
    
    </>
        )
    }

