import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionSix = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda memiliki riwayat imun tubuh lemah / immunocompromised / kelainan pada imun tubuh?"
        nextRoute="/diagnosis-mandiri/question-seven"
      />
    </div>
  );
};

export default QuestionSix;
