import React, { Component } from "react";
import { graphql } from "react-apollo";
import { hashHistory } from "react-router";
import query from "../queries/AirportsAndAirlines";

class SelectForm extends Component {
  constructor(props) {
    super(props);

    this.state = { airline: "AirTran Airways", airport: "" };
  }

  handleAirlineChange(event) {
    this.setState({ airline: event.target.value });
  }

  handleAirportChange(event) {
    this.setState({ airport: event.target.value });
  }

  populateAirlines() {
    if (!this.props.data.loading) {
      const airlines = [
        ...new Set(this.props.data.airlines.map(airline => airline.name))
      ].sort();
      let i = 0;
      return airlines.map(airline => (
        <option key={i++} value={airline}>
          {airline}
        </option>
      ));
    }
  }

  populateAirports() {
    if (!this.props.data.loading) {
      const airports = [
        ...new Set(this.props.data.airports.map(airport => airport.name))
      ].sort();
      let i = 0;
      return airports.map(airport => (
        <option key={i++} value={airport}>
          {airport}
        </option>
      ));
    }
  }

  handleAirlineSubmit(event) {
    event.preventDefault();

    if (this.state.airline != "") {
      hashHistory.push(`/airline/${this.state.airline}`);
    }
  }

  handleAirportSubmit(event) {
    event.preventDefault();

    if (this.state.airline != "") {
      hashHistory.push(`/airport/${this.state.airport}`);
    }
  }

  render() {
    return (
      <div>
        <div className="row">
          <h3>Search by Airline</h3>
          <form
            className="col s8"
            onSubmit={this.handleAirlineSubmit.bind(this)}
          >
            <div className="input-field col s12">
              <select
                value={this.state.value}
                onChange={this.handleAirlineChange.bind(this)}
                className="browser-default"
              >
                {this.populateAirlines()}
              </select>
            </div>
            <button className="btn waves-effect waves-light" type="submit">
              Search by Airline
            </button>
          </form>
        </div>
        <div className="row">
          <h3>Search by Airport</h3>
          <form
            className="col s8"
            onSubmit={this.handleAirportSubmit.bind(this)}
          >
            <div className="input-field col s12">
              <select
                value={this.state.value}
                onChange={this.handleAirportChange.bind(this)}
                className="browser-default"
              >
                {this.populateAirports()}
              </select>
            </div>
            <button className="btn waves-effect waves-light" type="submit">
              Search by Airport
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default graphql(query)(SelectForm);
