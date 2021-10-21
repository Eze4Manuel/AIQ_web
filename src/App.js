import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import Home from "demos/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" replace='true'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
 