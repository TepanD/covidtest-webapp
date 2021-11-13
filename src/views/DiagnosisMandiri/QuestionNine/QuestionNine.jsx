import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionNine = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda memiliki riwayat penyakit ISPA?"
        nextRoute="/diagnosis-mandiri/question-ten"
        qNum="question_nine"
      />
    </div>
  );
};

export default QuestionNine;
