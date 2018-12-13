import gql from "graphql-tag";
const WINE_TASTERS = gql`
  query wineTasters {
    wineTasters {
      name
      favouriteWine {
        name
        grapes
      }
    }
  }
`;

export default WINE_TASTERS;
