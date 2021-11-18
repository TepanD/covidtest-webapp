import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionEleven = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda memiliki riwayat kontak dengan hewan yang sudah teridentifikasi terinfeksi Covid-19?"
        nextRoute="/diagnosis-mandiri/question-twelve"
        qNum="question_eleven"
      />
    </div>
  );
};

export default QuestionEleven;
