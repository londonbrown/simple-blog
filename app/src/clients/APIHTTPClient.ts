import axios from "axios";
import {
  LOCAL_API_GATEWAY_ENDPOINT,
  POST_PATH,
  USER_PATH
} from "../config.json";
import { PostProps } from "../components/Post";
import { Delta } from "quill";
// TODO set based on environment variables
const USER_REQUEST_URL = LOCAL_API_GATEWAY_ENDPOINT + USER_PATH;
const POST_REQUEST_URL = LOCAL_API_GATEWAY_ENDPOINT + POST_PATH;

type PostSubmission = {
  title: string | undefined;
  content: string | Delta | undefined;
  username: string | undefined;
};

class APIHTTPClient {
  constructor() {
    this.getUser = this.getUser.bind(this);
    this.getPost = this.getPost.bind(this);
    this.getPostsByUser = this.getPostsByUser.bind(this);
    this.getUserByUsername = this.getUserByUsername.bind(this);
    this.getUsername = this.getUsername.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  getUser(id: string) {
    return axios
      .get(USER_REQUEST_URL, {
        params: {
          id: id
        },
        timeout: 3000,
        responseType: "json",
        withCredentials: false
      })
      .then(response => {
        return response.data;
      })
      .catch(e => console.error(e));
  }

  getUserByUsername(username: string) {
    return {
      id: "1234567",
      username: "lahiyam",
      createdAt: 123456
    };
  }

  getUsername(): string {
    return "lahiyam";
  }

  getPost(id: string | null) {
    return axios
      .get(POST_REQUEST_URL, {
        params: {
          id: id
        }
      })
      .then(response => response.data)
      .catch(e => console.error(e));
  }

  getPostsByUser(userId: string, createdAt?: number) {
    return axios
      .get(POST_REQUEST_URL, {
        params: {
          userId: userId,
          createdAt: createdAt
        }
      })
      .then(response => response.data)
      .catch(e => console.error(e));
  }

  submitPost(postObj: PostSubmission): PostProps {
    console.log(postObj);
    return null;
  }
}

export default APIHTTPClient;
