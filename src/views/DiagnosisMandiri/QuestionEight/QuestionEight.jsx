import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionEight = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda seorang petugas kesehatan yang mendapatkan gejala yang sama dengan pasien pengidap ISPA yang telah Anda rawat tanpa penyebab yang jelas?"
        nextRoute="/diagnosis-mandiri/question-nine"
      />
    </div>
  );
};

export default QuestionEight;
