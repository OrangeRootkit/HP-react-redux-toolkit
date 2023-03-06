import React from "react";
import { useState, useEffect } from "react";
import { Layout } from "../layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Like } from "../pages/Like/Like";
import "./global/style/style.css";

function App() {
  const [data, setData] = useState([]);
  const storageKey = "RoJ6YU";
  const storageKeyPage = "W8LXgx";
  const storageKeyCardsPage = "oxN5wv";
  const [selectValue, setSelectValue] = useState("Choose one");
  const [inputValue, setInputValue] = useState("");
  const savedPage = +JSON.parse(localStorage.getItem(storageKeyPage)) ?? "1";
  const [currentPage, setPage] = useState(savedPage);

  const savedCardsPage = JSON.parse(localStorage.getItem(storageKeyCardsPage)) ?? 8;
  const [cardsPerPage, setCardsPerPage] = useState(savedCardsPage);

  const savedLikes = JSON.parse(localStorage.getItem(storageKey)) ?? [];
  const [isLike, setLike] = useState(savedLikes);
  const [selectorPages, setSelectorPages] = useState([2, 4, 8, 10, 12, 20, 50]);

  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const house = Array.from(
    new Set(data.map((el) => (el.house === "" ? "Choose one" : el.house)))
  );

  useEffect(() => {
    setPage(1);
  }, [inputValue, selectValue]);

  useEffect(() => {
    setPage(savedPage);
  }, []);

  
  useEffect(() => {
    localStorage.setItem(storageKeyPage, JSON.stringify(currentPage));
    localStorage.setItem(storageKeyCardsPage, JSON.stringify(cardsPerPage));
  }, [currentPage, cardsPerPage]);


  let newData = data
    .filter(
      ({ house }) => house === selectValue || selectValue === "Choose one"
    )
    .filter(({ name }) =>
      name.toLowerCase().includes(inputValue.toLowerCase().trim())
    )
    .map((el) => el);

  const paginationLength = Math.ceil(data.length / cardsPerPage);
  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const tempData = newData.slice(firstCardIndex, lastCardIndex);

  const objFunc = {
    paginate: function (e) {
      setPage(e.target.value);
    },
    lastPage: function () {
      setPage(paginationLength);
    },
    firstPage: function () {
      setPage(1);
    },
  };

  const handleSelect = (e) => setSelectValue(e.target.value);
  const handleInput = (e) => setInputValue(e.target.value);
  const cardsOnPage = (e) => setCardsPerPage(e.target.value);
  const makeLike = (name) => {
    setLike([...isLike, name]);
  };
  const makeDislike = (name) => setLike([...isLike.filter((el) => el != name)]);

  let filterData = data
    .filter((el) => isLike.includes(el.name))
    .map((el) => el);

  localStorage.setItem(storageKey, JSON.stringify(isLike));

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                tempData={tempData}
                inputValue={inputValue}
                selectValue={selectValue}
                selectDefaultValue={cardsPerPage}
                house={house}
                isLike={isLike}
                paginationLength={paginationLength}
                objFunc={objFunc}
                selectorPages={selectorPages}
                currentPage={currentPage}
                handleSelect={handleSelect}
                handleInput={handleInput}
                cardsOnPage={cardsOnPage}
                makeLike={makeLike}
                makeDislike={makeDislike}
              />
            }
          />

          <Route
            path="/like"
            element={<Like filterData={filterData} makeDislike={makeDislike} />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
