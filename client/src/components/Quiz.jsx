import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Question from "./Question";
import { decTrace, incTrace, markAns } from "../redux/reducers/quesReducer";

function Quiz() {
  const { questions, trace, ans } = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [val, setVal] = useState("");

  const prevBtn = () => {
    if (trace > 0) {
      dispatch(decTrace());
    }
  };

  const nextBtn = () => {
    if (trace < questions.length - 1) {
      dispatch(incTrace());
    } else {
      navigate("/result");
    }
    if (ans.length <= trace) {
      dispatch(markAns(val));
    }
    setVal(undefined);
  };

  const onchange = (i) => {
    setVal(i);
  };

  return (
    <div className="container">
      <h1>Quiz Application</h1>
      <Question onchange={onchange} />
      <div className="next-prev-btn">
        {trace > 0 ? (
          <button className="start-quiz-btn prev-btn" onClick={prevBtn}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="start-quiz-btn next-btn" onClick={nextBtn}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
