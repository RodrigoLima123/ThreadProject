import React from "react";

import { Provider } from "react-redux";
import store from "./store";

import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import GlobalStyles, { Container } from "./styles/global";

import Table from "./components/Table";
import Form from "./components/Form";
import Info from "./components/Info";

const App = () => (
  <Provider store={store}>
    <Container>
      <GlobalStyles />
      <Info />
      <Form />
      <Table />
    </Container>
  </Provider>
);

export default App;
