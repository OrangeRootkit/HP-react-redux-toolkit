import React from "react";
import s from "./Select.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeSelector, changeSchool } from "../../../store/reducers/selectorSlice";

export const Select = ({ version }) => {
  const dispatch = useDispatch();
  const cardsPerPage = useSelector((state) => state.selector.value);
  const school = useSelector((state) => state.selector.school);

  let optionValue = [];
  version === "house"
    ? (optionValue = [
        "Choose one",
        "Gryffindor",
        "Slytherin",
        "Ravenclaw",
        "Hufflepuff",
      ])
    : (optionValue = [2, 4, 8, 10, 12, 20, 50]);

  return (
    <>
      <div>
        {version === "house" && (
          <label htmlFor="select" className={s.select__label}>
            School
          </label>
        )}
        <select
          className={s.select}
          defaultValue={version === "house" ? school : cardsPerPage}
          onChange={(e) => {
            version === "house"
              ? dispatch(changeSchool(e.target.value))
              : dispatch(changeSelector(e.target.value));
          }}
        >
          {optionValue.map((el, i) => (
            <option key={i} className="select__option" value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
