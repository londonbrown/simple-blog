import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
  Switch
} from "react-router-dom";
import PostContainer, { PostContainerParams } from "./components/PostContainer";
import UserContainer from "./components/UserContainer";
import PostComposer from "./components/PostComposer";
import APIHTTPClient from "./clients/APIHTTPClient";
import GlobalContext from "./contexts/GlobalContext";

type AppState = {
  client: APIHTTPClient | undefined;
};

class App extends Component<{}, AppState> {
  private client: APIHTTPClient | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      client: undefined
    };
  }

  componentDidMount(): void {
    if (!this.client || !this.state.client) {
      this.client = new APIHTTPClient();
      this.setState({
        client: this.client
      });
    }
  }

  render() {
    return (
      <Container>
        <Header />
        <Router>
          <Switch>
            <GlobalContext.Provider value={{ client: this.state.client }}>
              <Route exact path="/" component={() => <Home />} />
              <Route
                path="/post/:postId"
                component={(
                  props: RouteComponentProps<PostContainerParams>
                ) => <PostContainer {...props} />}
              />
              <Route path="/user" component={() => <UserContainer />} />
              <Route path="/new" component={() => <PostComposer />} />
              <Route path="/edit" component={() => <PostComposer editMode />} />
            </GlobalContext.Provider>
          </Switch>
        </Router>
      </Container>
    );
  }
}

export default App;
