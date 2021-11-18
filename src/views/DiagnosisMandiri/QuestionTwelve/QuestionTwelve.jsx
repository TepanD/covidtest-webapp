import React from "react";
import { QuestionContainer } from "../../../component/QuestionContainer";

const QuestionTwelve = () => {
  return (
    <div>
      <QuestionContainer
        question="Apakah Anda pernah mengujungi fasilitas kesehatan publik yang memiliki kasus terkonfirmasi atau terduga virus Covid-19?"
        nextRoute="/diagnosis-mandiri/result"
        qNum="question_twelve"
      />
    </div>
  );
};

export default QuestionTwelve;
