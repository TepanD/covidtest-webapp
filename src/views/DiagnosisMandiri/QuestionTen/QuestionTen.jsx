import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionTen = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda melakukan kontak dengan pasien yang terkonfirmasi atau terduga Covid-19 dalam waktu 14 hari sebelum gejala pertama?"
        nextRoute="/diagnosis-mandiri/question-eleven"
      />
    </div>
  );
};

export default QuestionTen;
