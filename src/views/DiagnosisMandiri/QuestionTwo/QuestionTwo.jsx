import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionTwo = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda memiliki gejala batuk-batuk?"
        nextRoute="/diagnosis-mandiri/question-three"
        qNum="question_two"
      />
    </div>
  );
};

export default QuestionTwo;
