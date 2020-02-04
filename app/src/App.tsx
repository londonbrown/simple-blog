import React from "react";

import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";

const App: React.FC = () => {
  return (
    <Container>
      <Header className={"ml-lg-5 mr-lg-5"} />
      <Home className={"ml-lg-5 mr-lg-5"} />
    </Container>
  );
};

export default App;
