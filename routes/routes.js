const express = require("express");
const Question = require("../models/quesModel");
const Result = require("../models/resultModel");

const router = express.Router();

router.get("/getallquestions", async (req, res) => {
  try {
    const result = await Question.find();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/getallresults", async (req, res) => {
  try {
    const result = await Result.find();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/setquestion", async (req, res) => {
  try {
    const ques = Question(req.body);
    const result = await ques.save();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.post("/setresult", async (req, res) => {
  try {
    const ques = Result(req.body);
    const result = await ques.save();
    res.send(result);
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
