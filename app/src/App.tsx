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
import GlobalContext, { ModalState } from "./contexts/GlobalContext";
import { Modal } from "react-bootstrap";

type AppState = {
  client: APIHTTPClient | undefined;
  modal: ModalState;
};

class App extends Component<{}, AppState> {
  private client: APIHTTPClient | undefined;
  constructor(props: {}) {
    super(props);
    this.state = {
      client: undefined,
      modal: {
        enabled: false
      }
    };
    this.updateModal = this.updateModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  updateModal(modal: ModalState): void {
    this.setState({
      modal: modal
    });
  }

  closeModal(): void {
    console.log("Closed");
    const modal = this.state.modal;
    modal.enabled = false;
    this.setState({
      modal: modal
    });
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
      <>
        <Container>
          <Header />
          <Router>
            <Switch>
              <GlobalContext.Provider
                value={{
                  client: this.state.client,
                  updateModal: this.updateModal
                }}
              >
                <Route exact path="/">
                  <Home />
                </Route>
                <Route
                  path="/post/:postId"
                  component={(
                    props: RouteComponentProps<PostContainerParams>
                  ) => <PostContainer {...props} />}
                  {...this.props}
                />
                <Route path="/user" component={() => <UserContainer />} />
                <Route path="/new" component={() => <PostComposer />} />
                <Route
                  path="/edit"
                  component={() => <PostComposer editMode />}
                />
                <Modal
                  show={this.state.modal.enabled}
                  onHide={this.closeModal}
                  centered
                  autoFocus
                  backdrop={"static"}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{this.state.modal.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{this.state.modal.body}</Modal.Body>
                  {this.state.modal.footer && (
                    <Modal.Footer>{this.state.modal.footer}</Modal.Footer>
                  )}
                </Modal>
              </GlobalContext.Provider>
            </Switch>
          </Router>
        </Container>
      </>
    );
  }
}

export default App;
