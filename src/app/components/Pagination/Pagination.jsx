import React from "react";
import { Btn } from "../UI/Button/Btn";

export const Pagination = ({ paginationLength, currentPage }) => {
  currentPage = currentPage - 1;

  const numbers = [];
  for (let i = 1; i <= paginationLength; i++) {
    numbers.push(i);
  }
  let tempNumber = [0, 1, 2, 3, 4];

  if (currentPage <= 2) {
    tempNumber = tempNumber;
  } else if (currentPage > 2 && currentPage < paginationLength - 2) {
    tempNumber = numbers.slice(+currentPage - 3, +currentPage + 2);
  } else {
    tempNumber = [];
    for (let i = paginationLength - 5; i < paginationLength; i++) {
      tempNumber.push(i);
    }
  }

  const btnClass = (el) => (+currentPage === el ? "sqr_currentPage" : "sqr");

  return (
    <div>
      <Btn className={"rectangle"} text={"First"} value={1}></Btn>
      {tempNumber.map((el, i) => (
        <Btn className={btnClass(el, i)} key={i} text={el + 1} value={el + 1}>
          {" "}
        </Btn>
      ))}
      <Btn className={"rectangle"} text={"Last"} value={paginationLength}></Btn>
    </div>
  );
};
