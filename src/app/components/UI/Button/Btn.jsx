import React from "react";
import "./Btn.scss";
import { useDispatch } from "react-redux";
import { paginate } from "../../../store/reducers/paginationSlice";

export const Btn = ({ className, text, value }) => {
  const dispatch = useDispatch();

  return (
    <button
      className={className}
      value={value}
      onClick={(e) => dispatch(paginate(e.target.value))}
    >
      {text}
    </button>
  );
};
