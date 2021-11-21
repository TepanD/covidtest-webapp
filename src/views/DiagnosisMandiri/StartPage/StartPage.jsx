import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
import "./StartPage.scss";

const StartPage = () => {
  const history = useHistory();

  useEffect(() => {
    document.title = "Mulai Diagnosis Mandiri - Covid Test App";
  }, []);

  const handleClick = () => {
    const diagnosis_answers = {
      question_one: "",
      question_two: "",
      question_three: "",
      question_four: "",
      question_five: "",
      question_six: "",
      question_seven: "",
      question_eight: "",
      question_nine: "",
      question_ten: "",
      question_eleven: "",
      question_twelve: "",
    };
    if (window.sessionStorage.getItem("diagnosis_answers") === null) {
      window.sessionStorage.setItem(
        "diagnosis_answers",
        JSON.stringify(diagnosis_answers)
      );
    } else {
      window.sessionStorage.setItem(
        "diagnosis_answers",
        JSON.stringify(diagnosis_answers)
      );
    }
    history.push("/diagnosis-mandiri/question-one", { validation: true });
  };

  const transition = {
    duration: 0.5,
    ease: [0.43, 0.13, 0.23, 0.96],
  };

  const slideVariant = {
    rest: { y: -200, opacity: 0 },
    enter: { y: 0, opacity: 1, transition: { delay: 0.2, ...transition } },
    exit: { y: -90, opacity: 0, transition: { delay: 0.15, ...transition } },
  };

  return (
    <div>
      <motion.div
        className="sp_outer_container"
        exit="exit"
        variants={slideVariant}
      >
        <div className="sp_q_container">
          <p>
            Untuk memulai proses diagnosis, silakan klik tombol{" "}
            <strong>Mulai</strong> di bawah ini!
          </p>
        </div>
        <div className="sp_a_container">
          <button className="sp_start_button" onClick={handleClick}>
            Mulai!
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default StartPage;
