import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  results: [],
};

export const resultReducer = createSlice({
  name: "results",
  initialState,
  reducers: {
    setResult: (state, action) => {
      state.results = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetResult: (state, action) => {
      state.user = "";
    },
  },
});

export const { setResult, setUser, resetResult } = resultReducer.actions;
export default resultReducer.reducer;
