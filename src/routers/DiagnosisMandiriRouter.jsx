// import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Switch } from "react-router";
import * as DiagnosisMandiri from "../views/DiagnosisMandiri";

const DiagnosisMandiriRouter = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Switch>
        <Route
          path="/diagnosis-mandiri"
          exact
          component={DiagnosisMandiri.StartPage}
        />
        <Route
          path="/diagnosis-mandiri/question-one"
          component={DiagnosisMandiri.QuestionOne}
        />
        <Route
          path="/diagnosis-mandiri/question-two"
          component={DiagnosisMandiri.QuestionTwo}
        />
        <Route
          path="/diagnosis-mandiri/question-three"
          component={DiagnosisMandiri.QuestionThree}
        />
        <Route
          path="/diagnosis-mandiri/question-four"
          component={DiagnosisMandiri.QuestionFour}
        />
        <Route
          path="/diagnosis-mandiri/question-five"
          component={DiagnosisMandiri.QuestionFive}
        />
        <Route
          path="/diagnosis-mandiri/question-six"
          component={DiagnosisMandiri.QuestionSix}
        />
        <Route
          path="/diagnosis-mandiri/question-seven"
          component={DiagnosisMandiri.QuestionSeven}
        />
        <Route
          path="/diagnosis-mandiri/question-eight"
          component={DiagnosisMandiri.QuestionEight}
        />
        <Route
          path="/diagnosis-mandiri/question-nine"
          component={DiagnosisMandiri.QuestionNine}
        />
        <Route
          path="/diagnosis-mandiri/question-ten"
          component={DiagnosisMandiri.QuestionTen}
        />
        <Route
          path="/diagnosis-mandiri/question-eleven"
          component={DiagnosisMandiri.QuestionEleven}
        />
        <Route
          path="/diagnosis-mandiri/question-twelve"
          component={DiagnosisMandiri.QuestionTwelve}
        />
        <Route
          path="/diagnosis-mandiri/result"
          component={DiagnosisMandiri.DiagnosisResult}
        />
      </Switch>
    </div>
  );
};

export default DiagnosisMandiriRouter;
