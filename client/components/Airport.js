import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/AirportQuery";
import { Link } from "react-router";

class Airport extends Component {
  render() {
    if (this.props.data.loading) {
      return <div></div>;
    }

    const airport = this.props.data.airport;
    const average = array => array.reduce((a, b) => a + b, 0) / array.length;
    const avgLiftoffDelay = average(
      airport.outgoing_flights.map(flight => flight.destination_delay)
    ).toFixed(3);
    const avgLandingDelay = average(
      airport.incoming_flights.map(flight => flight.arrival_delay)
    ).toFixed(3);

    return (
      <div className="row">
        <Link to="/select">Back</Link>
        <h3>{this.props.params.name}</h3>
        <h5>IATA Code</h5>
        {airport.code}
        <h5>Number of incoming delays</h5>
        {airport.incoming_flights.length}
        <h5>Number of outgoing delays</h5>
        {airport.outgoing_flights.length}
        <h5>Average liftoff delay (when there is a delay)</h5>
        {isNaN(avgLiftoffDelay) ? "0 minutes" : avgLiftoffDelay + " minutes"}
        <h5>Average landing delay (when there is a delay)</h5>
        {isNaN(avgLandingDelay) ? "0 minutes" : avgLandingDelay + " minutes"}
      </div>
    );
  }
}

export default graphql(query, {
  options: props => {
    return { variables: { name: props.params.name } };
  }
})(Airport);
