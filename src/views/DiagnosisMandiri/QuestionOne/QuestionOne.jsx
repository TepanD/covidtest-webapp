import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionOne = () => {
  return (
    <QuestionContainer
      question="Apakah suhu Anda di atas 38&#176; celcius?"
      nextRoute="/diagnosis-mandiri/question-two"
      qNum="question_one"
    />
  );
};

export default QuestionOne;
