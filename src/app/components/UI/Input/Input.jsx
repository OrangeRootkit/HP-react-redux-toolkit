import React from "react";
import s from "./Input.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeInput } from "../../../store/reducers/inputSlice";

export const Input = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue.inputValue);
  console.log(inputValue);

  return (
    <div>
      <label htmlFor="input" className={s.input__label}>
        Name
      </label>
      <input
        className={s.input}
        placeholder="Enter name"
        value={inputValue}
        onChange={(e) => dispatch(changeInput(e.target.value))}
      />
    </div>
  );
};
