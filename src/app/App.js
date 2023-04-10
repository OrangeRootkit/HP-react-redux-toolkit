import React from "react";
import { useState, useEffect } from "react";
import { Layout } from "../layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Like } from "../pages/Like/Like";
import "./global/style/style.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./store/reducers/dataSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const school = useSelector((state) => state.selector.school);
  const cardsPerPage = useSelector((state) => state.selector.value);
  const data = useSelector((state) => state.data.data);
  const dataLength = useSelector((state) => state.data.dataLength);
  const inputValue = useSelector((state) => state.inputValue.inputValue);
  const currentPage = useSelector((state) => state.pagination.page);

  const storageKey = "savedLikesKey";
  const storageKeyPage = "storageKeyPage";
  const storageKeyCardsPage = "storageKeyCardsPage";
  const storageKeySchool = "storageKeySchool";

  const savedLikes = JSON.parse(localStorage.getItem(storageKey)) ?? [];
  const [isLike, setLike] = useState(savedLikes);

  useEffect(() => {
    localStorage.setItem(storageKeyPage, JSON.stringify(currentPage));
    localStorage.setItem(storageKeyCardsPage, JSON.stringify(cardsPerPage));
    localStorage.setItem(storageKeySchool, JSON.stringify(school));
    localStorage.setItem(storageKey, JSON.stringify(isLike));
  }, [currentPage, cardsPerPage, school, isLike]);

  const makeLike = (name) => {
    setLike([...isLike, name]);
  };
  const makeDislike = (name) => setLike([...isLike.filter((el) => el != name)]);

  let filterData = data
    .filter((el) => isLike.includes(el.name))
    .map((el) => el);

  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                isLike={isLike}
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
