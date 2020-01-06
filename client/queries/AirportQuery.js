import gql from "graphql-tag";

export default gql`
  query AirportQuery($name: String!) {
    airport(name: $name) {
      code
      outgoing_flights {
        destination_delay
      }
      incoming_flights {
        arrival_delay
      }
    }
  }
`;
