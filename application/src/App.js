import React, { Component } from "react";
import Tabs from "./components/Tabs/Tabs";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./components/theme";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

// в ApolloClient задаем конфигурацию сервера
// т.е. просто указываю адресс своего сервера(т.е. путь по которому выполняются запросы)
const client = new ApolloClient({
  uri: "http://localhost:3005/graphql",
});

class App extends Component {
  render() {
    return (
      // оборачиваю приложение ApolloProvider и далее в атрибутах передаю конфигурацию client
      <ApolloProvider client={client}>
        <MuiThemeProvider theme={theme}>
          <Tabs />
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App;
