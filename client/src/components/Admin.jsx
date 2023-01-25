import React, { useState } from "react";
import { insertQuestion } from "../helper/apiCalls";

function Admin() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState();
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");

  const btnSubmit = async (e) => {
    e.preventDefault();
    const options = [option1, option2, option3];

    await insertQuestion({ question, options, answer });
  };

  return (
    <>
      <div className="container">
        <h1>Quiz Application</h1>
        <input
          type="text"
          className="admin-input"
          placeholder="Enter your Question"
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
        />
        <div className="admin-options">
          <input
            type="text"
            className="admin-input"
            placeholder="Enter 1st option"
            value={option1}
            onChange={(e) => {
              setOption1(e.target.value);
            }}
          />
          <input
            type="text"
            className="admin-input"
            placeholder="Enter 2nd option"
            value={option2}
            onChange={(e) => {
              setOption2(e.target.value);
            }}
          />
          <input
            type="text"
            className="admin-input"
            placeholder="Enter 3rd option"
            value={option3}
            onChange={(e) => {
              setOption3(e.target.value);
            }}
          />
        </div>
        <input
          type="text"
          className="admin-input"
          placeholder="Enter correct answer index"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
        <button className="admin-btn" onClick={btnSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default Admin;
