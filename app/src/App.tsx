import React from "react";

import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PostContainer from "./components/PostContainer";
import UserContainer from "./components/UserContainer";

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/post" component={() => <PostContainer />} />
          <Route path="/user" component={() => <UserContainer />} />
        </Switch>
      </Router>
    </Container>
  );
};

export default App;
