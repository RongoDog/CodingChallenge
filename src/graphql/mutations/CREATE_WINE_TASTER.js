import gql from "graphql-tag";
const CREATE_WINE_TASTER = gql`
  mutation createWineTaster(
    $name: String!
    $nationality: String
    $favouriteWine: ID
  ) {
    createWineTaster(
      data: {
        name: $name
        nationality: $nationality
        favouriteWine: { 
          connect: $favouriteWine
        }
      }
    ) {
      id
      name
      nationality
      favouriteWine {
        id
        name
        grapes
      }
    }
  }
`;

export default CREATE_WINE_TASTER;
