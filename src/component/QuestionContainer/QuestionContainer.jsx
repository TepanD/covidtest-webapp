import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../StyledButton/StyledButton";
import "./QuestionContainer.scss";
import { useHistory } from "react-router";

const QuestionContainer = ({ question, nextRoute }) => {
  const history = useHistory();

  const handleClick = () => {
    // window.location.href = nextRoute;
    history.push(nextRoute);
  };

  return (
    <div className="qc_outer_container">
      <div className="qc_q_container">
        <p>{question}</p>
      </div>
      <div className="qc_a_container">
        <StyledButton onClick={handleClick}>Ya</StyledButton>
        <StyledButton>Tidak</StyledButton>
      </div>
    </div>
  );
};

QuestionContainer.propTypes = {
  question: PropTypes.string,
  nextRoute: PropTypes.string,
};

export default QuestionContainer;
