import axios from "axios";
import {
  API_GATEWAY_ENDPOINT,
  LOCAL_API_GATEWAY_ENDPOINT,
  POST_PATH,
  USER_PATH
} from "../config.json";
// TODO set based on environment variables
const USER_REQUEST_URL = LOCAL_API_GATEWAY_ENDPOINT + USER_PATH;
const POST_REQUEST_URL = LOCAL_API_GATEWAY_ENDPOINT + POST_PATH;

class APIHTTPClient {
  constructor() {
    this.getUser = this.getUser.bind(this);
    this.getPost = this.getPost.bind(this);
    this.getPostsByUser = this.getPostsByUser.bind(this);
    this.getUserByUsername = this.getUserByUsername.bind(this);
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
}

export default APIHTTPClient;
