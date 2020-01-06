import gql from "graphql-tag";

export default gql`
  {
    airlines {
      name
      code
    }
    airports {
      name
      code
    }
  }
`;
