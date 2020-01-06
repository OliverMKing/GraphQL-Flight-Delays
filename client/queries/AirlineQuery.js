import gql from "graphql-tag";

export default gql`
  query AirlineQuery($name: String!) {
    airline(name: $name) {
      code
      flights {
        arrival_delay
        destination_delay
      }
    }
  }
`;
