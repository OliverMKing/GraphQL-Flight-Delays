import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/AirlineQuery";
import { Link } from "react-router";

class Airline extends Component {
  render() {
    if (this.props.data.loading) {
      return <div></div>;
    }

    const airline = this.props.data.airline;
    const average = array => array.reduce((a, b) => a + b) / array.length;
    const avgLiftoffDelay = average(
      airline.flights.map(flight => flight.destination_delay)
    ).toFixed(3);
    const avgLandingDelay = average(
      airline.flights.map(flight => flight.arrival_delay)
    ).toFixed(3);

    return (
      <div className="row">
        <Link to="/select">Back</Link>
        <h3>{this.props.params.name}</h3>
        <h5>IATA Code</h5>
        {airline.code}
        <h5>Number of delays</h5>
        {airline.flights.length}
        <h5>Average liftoff delay (when there is a delay)</h5>
        {avgLiftoffDelay}
        <h5>Average landing delay (when there is a delay)</h5>
        {avgLandingDelay}
      </div>
    );
  }
}

export default graphql(query, {
  options: props => {
    return { variables: { name: props.params.name } };
  }
})(Airline);
