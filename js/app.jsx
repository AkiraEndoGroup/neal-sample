import React from "react";
import SamplePage from "./sample-page.jsx";
import ReactDOM from "react-dom";
import { Router, IndexRoute, Route, Link, Redirect } from "react-router";
import { App } from "neal-react";
import createHashHistory from "history/lib/createHashHistory";
import createBrowserHistory from "history/lib/createBrowserHistory";

let history = createBrowserHistory();
if (window.location.protocol === "file:") {
  history = createHashHistory({ queryKey: false });
}

class SampleApp extends React.Component {
  render() {
    return (
      <App googleAnalyticsKey="ABC" segmentKey="ABC" stripeKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh" history={history}>
        {this.props.children}
      </App>
    );
  }
}

ReactDOM.render((
  <Router history={history}>
    <Route path="/" component={SampleApp} history={history}>
      <IndexRoute name="home" component={SamplePage}/>
      <Route path="*" component={SamplePage}/>
    </Route>
  </Router>
), document.getElementById("main"));
