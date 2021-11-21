import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { StyledButton } from "../StyledButton/StyledButton";
import "./QuestionContainer.scss";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

const transition = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.96],
};

const slideVariant = {
  rest: { y: 200, opacity: 0 },
  enter: { y: 0, opacity: 1, transition: { delay: 0.1, ...transition } },
  exit: { y: -90, opacity: 0, transition: { delay: 0.1, ...transition } },
};

const QuestionContainer = ({ question, nextRoute, qNum }) => {
  const history = useHistory();

  useEffect(() => {
    if (history.location.state === undefined) {
      history.push("/diagnosis-mandiri");
    }
    document.title = "Diagnosis Mandiri - Covid Test App";
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
    <motion.div
      className="qc_outer_container"
      initial="rest"
      animate="enter"
      exit="exit"
      variants={slideVariant}
    >
      <div className="qc_q_container">
        <p>{question}</p>
      </div>
      <div className="qc_a_container">
        <StyledButton onClick={() => handleClick(true)}>Ya</StyledButton>
        <StyledButton onClick={() => handleClick(false)}>Tidak</StyledButton>
      </div>
    </motion.div>
  );
};

QuestionContainer.propTypes = {
  question: PropTypes.string,
  nextRoute: PropTypes.string,
  qNum: PropTypes.string,
};

export default QuestionContainer;
