import React, { Component } from "react";
import { graphql } from "react-apollo";
import query from "../queries/AirportsAndAirlines";

class SelectForm extends Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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

  render() {
    return (
      <div className="row">
        <h3>Search by Airline</h3>
        <form className="col s8">
          <div className="input-field col s12">
            <select
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
              className="browser-default"
            >
              <option value="" disabled>
                Choose your option
              </option>
              {this.populateAirlines()}
            </select>
          </div>
        </form>
      </div>
    );
  }
}

export default graphql(query)(SelectForm);
