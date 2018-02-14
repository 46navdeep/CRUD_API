import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Router, Route, browserHistory } from "react-router";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Admin from "./components/Admin";

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router path="/" history={browserHistory}>
      <Route path="/product" component={Admin} />
    </Router>
  </MuiThemeProvider>,
  document.getElementById("root")
);
