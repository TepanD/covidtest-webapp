import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionFour = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda merasakan sakit pada tenggorokan?"
        nextRoute="/diagnosis-mandiri/question-five"
      />
    </div>
  );
};

export default QuestionFour;
