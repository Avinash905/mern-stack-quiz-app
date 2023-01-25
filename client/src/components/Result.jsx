import React, { useEffect } from "react";
import ResultTable from "./ResultTable";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetResult } from "../redux/reducers/resultReducer";
import { resetQues } from "../redux/reducers/quesReducer";
import { insertResult } from "../helper/apiCalls";

function Result() {
  const { user } = useSelector((state) => state.results);
  const { questions, ans } = useSelector((state) => state.questions);
  const dispatch = useDispatch();

  const restart = () => {
    dispatch(resetQues());
    dispatch(resetResult());
  };

  const resArr = questions.map((ques) => {
    return ques.answerIndex;
  });
  const correctAnswers = resArr.map((res, i) => {
    return res === ans[i];
  });
  const numberOfCorrect = correctAnswers.filter((ele) => {
    return ele === true;
  });
  const pointsEarned = numberOfCorrect.length * 10;

  const undef = ans.filter((ele) => {
    return ele !== undefined;
  });
  const attempts = undef.length;

  const achieved = questions.length * 5 <= pointsEarned ? "Pass" : "Fail";

  useEffect(() => {
    (async () => {
      await insertResult({
        username: user,
        pointsEarned,
        achieved,
        attempts,
      });
    })();
  }, []);

  return (
    <div className="container">
      <h1>Quiz Application</h1>
      <div className="result">
        <div className="result-left">
          <p>Username</p>
          <p>Total Quiz Points:</p>
          <p>Total Questions:</p>
          <p>Total Attempts:</p>
          <p>Total Earn Points:</p>
          <p>Quiz Result</p>
        </div>
        <div className="result-right">
          <p>{user}</p>
          <p>{questions.length * 10}</p>
          <p>{questions.length}</p>
          <p>{attempts}</p>
          <p>{pointsEarned}</p>
          <p>{achieved}</p>
        </div>
      </div>
      <NavLink
        to={"/"}
        className="start-quiz-btn flex-center"
        onClick={restart}
      >
        Restart
      </NavLink>
      <ResultTable />
    </div>
  );
}

export default Result;
