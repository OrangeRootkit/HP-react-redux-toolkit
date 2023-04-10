import { configureStore } from "@reduxjs/toolkit";
// import selectorSlice from "././selectorSlice.js";
// import paginationReducer from "./paginationSlice.js";
// import dataSlice from "./dataSlice.js"
// import inputSlice from "./inputSlice.js";
// import namesLikedSlice from "./namesLikedSlice.js";

import selectorSlice from "./reducers/selectorSlice";
import paginationReducer from "./reducers/paginationSlice";
import dataSlice from "./reducers/dataSlice"
import inputSlice from "./reducers/inputSlice";
import namesLikedSlice from "./reducers/namesLikedSlice";

export default configureStore({
  reducer: {
    selector: selectorSlice,
    pagination: paginationReducer,
    data: dataSlice,
    inputValue: inputSlice,
    counterLike: namesLikedSlice,
  },
});
