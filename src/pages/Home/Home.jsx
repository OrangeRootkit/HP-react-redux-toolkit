import React from "react";
import { Header } from "../../app/components/Header/Header";
import { Input } from "../../app/components/UI/Input/Input";
import { Select } from "../../app/components/UI/Select/Select";
import { Main } from "../../app/components/Main/Main";
import { Card } from "../../app/components/Card/Card";
import { BtnLink } from "../../app/components/UI/BtnLink/BtnLink";
import { Footer } from "../../app/components/Footer/Footer";
import { useSelector } from "react-redux";

export const Home = ({
  isLike,
  makeLike,
  makeDislike,
}) => {

  const data = useSelector((state) => state.data.data);
  const currentPage = useSelector((state) => state.pagination.page);
  const dataLength = useSelector((state) => state.data.dataLength);
  const inputValue = useSelector((state) => state.inputValue.inputValue);
  const school = useSelector((state) => state.selector.school);
  const cardsPerPage = useSelector((state) => state.selector.value);

  let newData = data
    .filter(({ house }) => house === school || school === "Choose one")
    .filter(({ name }) =>
      name.toLowerCase().includes(inputValue.toLowerCase().trim())
    )
    .map((el) => el);

  const paginationLength = Math.ceil(dataLength / cardsPerPage);
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const tempData = newData.slice(firstCardIndex, lastCardIndex);

  return (
    <>
      <Header>
        <Input />
        <Select version={"house"} />
      </Header>
      <Main>
        {tempData.map((el) => (
          <Card
            key={el.id}
            isLike={isLike.includes(el.name) ? true : false}
            makeLike={makeLike}
            makeDislike={makeDislike}
            core={el.wand.core}
            {...el}
          />
        ))}

        <BtnLink />
      </Main>
      <Footer
        paginationLength={paginationLength}
        currentPage={currentPage}
      />
    </>
  );
};
