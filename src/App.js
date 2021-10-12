import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line
import AgencyLandingPage from "demos/AgencyLandingPage.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  // If you want to disable the animation just use the disabled `prop` like below on your page's component


  return (
    <Router>
      <Switch>
        <Route path="/" replace='true'>
          <AgencyLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}
 