import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
  trace: 0,
  ans: [],
};

export const quesReducer = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    incTrace: (state, action) => {
      state.trace += 1;
    },
    decTrace: (state, action) => {
      state.trace -= 1;
    },
    resetQues: (state) => {
      state.trace = 0;
      state.ans = [];
    },
    markAns: (state, action) => {
      state.ans.push(action.payload);
    },
  },
});

export const { setQuestions, incTrace, decTrace, resetQues, markAns } =
  quesReducer.actions;
export default quesReducer.reducer;
