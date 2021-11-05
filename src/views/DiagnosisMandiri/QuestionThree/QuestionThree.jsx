import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionThree = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda memiliki gejala flu?"
        nextRoute="/diagnosis-mandiri/question-four"
      />
    </div>
  );
};

export default QuestionThree;
