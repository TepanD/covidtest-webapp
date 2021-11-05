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
          path="/diagnosis-mandiri/"
          exact
          component={DiagnosisMandiri.StartPage}
        />
        <Route
          path="/diagnosis-mandiri/question-one"
          exact
          component={DiagnosisMandiri.QuestionOne}
        />
        <Route
          path="/diagnosis-mandiri/question-two"
          exact
          component={DiagnosisMandiri.QuestionTwo}
        />
        <Route
          path="/diagnosis-mandiri/question-three"
          exact
          component={DiagnosisMandiri.QuestionThree}
        />
        <Route
          path="/diagnosis-mandiri/question-four"
          exact
          component={DiagnosisMandiri.QuestionFour}
        />
        <Route
          path="/diagnosis-mandiri/question-five"
          exact
          component={DiagnosisMandiri.QuestionFive}
        />
        <Route
          path="/diagnosis-mandiri/question-six"
          exact
          component={DiagnosisMandiri.QuestionSix}
        />
        <Route
          path="/diagnosis-mandiri/question-seven"
          exact
          component={DiagnosisMandiri.QuestionSeven}
        />
        <Route
          path="/diagnosis-mandiri/question-eight"
          exact
          component={DiagnosisMandiri.QuestionEight}
        />
        <Route
          path="/diagnosis-mandiri/question-nine"
          exact
          component={DiagnosisMandiri.QuestionNine}
        />
        <Route
          path="/diagnosis-mandiri/question-ten"
          exact
          component={DiagnosisMandiri.QuestionTen}
        />
        <Route
          path="/diagnosis-mandiri/question-eleven"
          exact
          component={DiagnosisMandiri.QuestionEleven}
        />
        <Route
          path="/diagnosis-mandiri/question-twelve"
          exact
          component={DiagnosisMandiri.QuestionTwelve}
        />
      </Switch>
    </div>
  );
};

export default DiagnosisMandiriRouter;
