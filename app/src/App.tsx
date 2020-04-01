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
import APIHTTPClient from "./clients/APIHTTPClient";
import GlobalContext, { ModalState } from "./contexts/GlobalContext";
import { Modal } from "react-bootstrap";
import Editor, { EditorProps } from "./components/Editor";
import { UserData } from "./types/User";
import PostQuillContainer from "./components/PostQuillContainer";

type AppState = {
  client?: APIHTTPClient;
  defaultUser?: UserData;
  modal: ModalState;
};

class App extends Component<{}, AppState> {
  private client: APIHTTPClient | undefined;

  constructor(props: {}) {
    super(props);
    this.state = {
      client: undefined,
      defaultUser: undefined,
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
    const modal = this.state.modal;
    modal.enabled = false;
    this.setState({
      modal: modal
    });
  }

  async componentDidMount(): Promise<void> {
    if (!this.client || !this.state.client) {
      this.client = new APIHTTPClient();
      let defaultUser = await this.client.getDefaultUser();
      this.setState({
        client: this.client,
        defaultUser: defaultUser
      });
    }
  }

  render() {
    return (
      <>
        <Router>
          <Container>
            <Header className="mb-2" />
            <Switch>
              <GlobalContext.Provider
                value={{
                  client: this.state.client,
                  defaultUser: this.state.defaultUser,
                  updateModal: this.updateModal
                }}
              >
                <Route exact path="/" component={Home} />
                <Route
                  path="/post/:postId"
                  component={(
                    props: RouteComponentProps<PostContainerParams>
                  ) => <PostContainer {...props} />}
                  {...this.props}
                />
                <Route path="/user" component={() => <UserContainer />} />
                <Route
                  path="/(edit|new)"
                  component={(props: RouteComponentProps<EditorProps>) => (
                    <Editor {...props} />
                  )}
                  mode={"edit"}
                  editMode={"true"}
                />
                <Modal
                  show={this.state.modal.enabled}
                  onHide={this.closeModal}
                  centered
                  autoFocus
                  backdrop={"static"}
                  size="lg"
                >
                  <Modal.Header closeButton>
                    <Modal.Title>{this.state.modal.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    {typeof this.state.modal.body === "object" ? (
                      <PostQuillContainer content={this.state.modal.body} />
                    ) : (
                      this.state.modal.body
                    )}
                  </Modal.Body>
                  {this.state.modal.footer && (
                    <Modal.Footer>{this.state.modal.footer}</Modal.Footer>
                  )}
                </Modal>
              </GlobalContext.Provider>
            </Switch>
          </Container>
        </Router>
      </>
    );
  }
}

export default App;
