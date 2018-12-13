import React from 'react';
import { graphql, compose, Query } from "react-apollo";

import WINE_TASTERS from "../graphql/queries/WINE_TASTERS";
import CREATE_WINE_TASTER from "../graphql/mutations/CREATE_WINE_TASTER";
import ADD_WINE_TASTER from "../graphql/mutations/ADD_WINE_TASTER"

const ListWineTasters = props => {
  return (
    <Query query={WINE_TASTERS}>
      {({ loading, error, data }) => {
        if (loading) return "LOADING";
        if (error) return `Error! ${error.message}`;
        const { wineTasters } = data;
        console.log(data);
        return (
          <div>
            <h1>WINE TASTERS</h1>
            {
              wineTasters.map((wineTaster, i) => {
                return (
                  <React.Fragment key={i}>
                    <p>Name: {wineTaster.name}</p>
                    <br></br>
                  </React.Fragment>
                );
              })
            }
        </div>
        );
      }}
    </Query>
  );
};

export default compose(
  graphql(CREATE_WINE_TASTER, { name: "createWineTaster" }),
  graphql(ADD_WINE_TASTER, { name: "addWineTaster" }),
)(ListWineTasters);
