import React from "react";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Root() {
  return (
    <Router>
      <div>
        <Route path={[`/:filter`, "/"]} component={App} />
      </div>
    </Router>
  );
}

export default Root;
