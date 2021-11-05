import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionSeven = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda memiliki riwayat perjalanan ke negara tempat penyakit Covid-19 menyebar dalam 14 hari sebelum (diduga) gejala pertama?"
        nextRoute="/diagnosis-mandiri/question-eight"
      />
    </div>
  );
};

export default QuestionSeven;
