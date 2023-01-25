import React, { useState } from "react";
import { useEffect } from "react";
import { getAllQuestions } from "../helper/apiCalls";
import { useSelector, useDispatch } from "react-redux";
import { setQuestions } from "../redux/reducers/quesReducer";

const Question = ({ onchange }) => {
  const { questions, trace, ans } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const getques = async () => {
    const data = await getAllQuestions();
    dispatch(setQuestions(data));
  };

  const onSelect = (i) => {
    onchange(i);
  };
  useEffect(() => {
    getques();
  }, []);

  return (
    <div className="question">
      <h2>{questions[trace]?.question}</h2>
      <ul>
        {questions[trace]?.options.map((opt, i) => {
          return (
            <li key={i}>
              <input
                type="radio"
                name="options"
                id={`q${i}-option`}
                value={false}
                onChange={() => {
                  onSelect(i);
                }}
                checked={() => {
                  return ans[trace] === i ? true : null;
                }}
              />
              <label htmlFor={`q${i}-option`}>{opt}</label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
