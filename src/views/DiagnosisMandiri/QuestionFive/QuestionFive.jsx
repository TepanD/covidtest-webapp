import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionFive = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda memiliki riwayat penyakit pneunomia?"
        nextRoute="/diagnosis-mandiri/question-six"
        qNum="question_five"
      />
    </div>
  );
};

export default QuestionFive;
