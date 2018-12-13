import React, { Component } from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import './App.css';
import ListWineTasters from "./components/ListWineTasters";

const client = new ApolloClient({
  uri: "http://localhost:4466",
});
class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <ListWineTasters />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
