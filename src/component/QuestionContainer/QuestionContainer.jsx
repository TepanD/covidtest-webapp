import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../StyledButton/StyledButton";
import "./QuestionContainer.scss";
import { useHistory } from "react-router";

const QuestionContainer = ({ question, nextRoute, qNum }) => {
  const history = useHistory();

  useEffect(() => {
    if (history.location.state === undefined) {
      history.push("/diagnosis-mandiri");
    }
    document.title = "Diagnosis Mandiri";
  }, []);

  const questionAnswers = JSON.parse(
    window.sessionStorage.getItem("diagnosis_answers")
  );

  const handleClick = (answer) => {
    questionAnswers[qNum] = answer;
    window.sessionStorage.setItem(
      "diagnosis_answers",
      JSON.stringify(questionAnswers)
    );
    history.push(nextRoute, { validation: true });
  };

  return (
    <div className="qc_outer_container">
      <div className="qc_q_container">
        <p>{question}</p>
      </div>
      <div className="qc_a_container">
        <StyledButton onClick={() => handleClick(true)}>Ya</StyledButton>
        <StyledButton onClick={() => handleClick(false)}>Tidak</StyledButton>
      </div>
    </div>
  );
};

QuestionContainer.propTypes = {
  question: PropTypes.string,
  nextRoute: PropTypes.string,
  qNum: PropTypes.string,
};

export default QuestionContainer;
