import { configureStore } from "@reduxjs/toolkit";
import quesReducer from "./reducers/quesReducer";
import resultReducer from "./reducers/resultReducer";

export default configureStore({
  reducer: {
    questions: quesReducer,
    results: resultReducer,
  },
});
