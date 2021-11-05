import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionOne = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah suhu Anda di atas 38&#176; celcius?"
        nextRoute="/diagnosis-mandiri/question-two"
      />
    </div>
  );
};

export default QuestionOne;
