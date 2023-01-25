import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/reducers/resultReducer";

function Main() {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const startQuiz = () => {
    dispatch(setUser(username));
  };

  return (
    <>
      <div className="admin-btn-cont">
        <NavLink to={"/admin"} className="admin-btn">
          Admin Dashboard
        </NavLink>
      </div>
      <div className="container flex-center">
        <h1>Quiz Application</h1>
        <ol>
          <li>You will be asked 10 questions one after another.</li>
          <li>10 points is awarded for the correct answer.</li>
          <li>
            Each question has three options. You can choose only one option.
          </li>
          <li>You can review and change answer before the quiz finishes.</li>
          <li>The result will be declared at the end of the quiz.</li>
        </ol>
        <input
          type="text"
          className="username-input"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <NavLink to={"/quiz"} className="start-quiz-btn" onClick={startQuiz}>
          Start Quiz
        </NavLink>
      </div>
    </>
  );
}

export default Main;
