import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

export async function getAllQuestions() {
  try {
    const { data } = await axios.get("/getallquestions");
    return data;
  } catch (error) {
    return { error };
  }
}

export async function insertQuestion({ question, options, answer }) {
  try {
    await axios.post("/setquestion", {
      question,
      options,
      answerIndex: answer,
    });
    return "Question added successfully";
  } catch (error) {
    return { error };
  }
}

export async function getAllResults() {
  try {
    const { data } = await axios.get("/getallresults");
    return data;
  } catch (error) {
    return { error };
  }
}

export async function insertResult({
  username,
  pointsEarned,
  achieved,
  attempts,
}) {
  try {
    const data = await axios.post("/setresult", {
      username,
      pointsEarned,
      achieved,
      attempts,
    });
    return "Result added successfully";
  } catch (error) {
    return { error };
  }
}
