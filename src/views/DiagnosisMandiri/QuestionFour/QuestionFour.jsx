import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionFour = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda merasakan sakit pada tenggorokan?"
        nextRoute="/diagnosis-mandiri/question-five"
        qNum="question_four"
      />
    </div>
  );
};

export default QuestionFour;
