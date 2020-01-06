import React from "react";
import ReactDOM from "react-dom";
import ApolloClient, { createNetworkInterface } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { Router, hashHistory, Route, IndexRoute } from "react-router";
import App from "./components/App";
import Home from "./components/Home";
import SelectForm from "./components/Select";
import Airline from "./components/Airline";
import Airport from "./components/Airport";

// Specifies that cookies should be sent
const networkInterface = createNetworkInterface({
  uri: "/graphql",
  opts: {
    credentials: "same-origin"
  }
});

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={App}>
          <Route path="/select" component={SelectForm} />
          <Route path="/airline/:name" component={Airline} />
          <Route path="/airport/:name" component={Airport} />
        </Route>
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(<Root />, document.querySelector("#root"));
