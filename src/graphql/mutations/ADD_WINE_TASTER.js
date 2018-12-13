import gql from "graphql-tag";
const ADD_WINE_TASTER = gql`
  mutation addWineTaster(
    $name: String!
    $nationality: String
    $favouriteWine: ID
  ) {
    addMessage(
      wineTaster: {
        name: $name,
        nationality: $nationality,
        favouriteWine: $ID
      }
    ) @client
  }
`;

export default ADD_WINE_TASTER;
