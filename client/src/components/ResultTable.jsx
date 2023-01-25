import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllResults } from "../helper/apiCalls";
import { setResult } from "../redux/reducers/resultReducer";

let data;
const ResultTable = () => {
  const { results } = useSelector((state) => state.results);
  const dispatch = useDispatch();

  const getres = async () => {
    const data = await getAllResults();
    dispatch(setResult(data));
  };

  useEffect(() => {
    getres();
  }, []);

  return (
    <div className="result-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attempts</th>
            <th>Points Earned</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results?.map((ele, i) => {
            return (
              <tr key={i}>
                <td>{ele.username}</td>
                <td>{ele.attempts}</td>
                <td>{ele.pointsEarned}</td>
                <td>{ele.achieved}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
