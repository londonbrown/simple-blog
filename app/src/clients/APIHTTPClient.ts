import axios from "axios";
import {
  API_GATEWAY_ENDPOINT,
  LOCAL_API_GATEWAY_ENDPOINT,
  POST_PATH,
  USER_PATH,
  USER_ID
} from "../config.json";
import { PostData } from "../types/Post";
import { UserData } from "../types/User";
const ENDPOINT =
  window.location.hostname === "localhost"
    ? LOCAL_API_GATEWAY_ENDPOINT
    : API_GATEWAY_ENDPOINT;
const USER_REQUEST_URL = ENDPOINT + USER_PATH;
const POST_REQUEST_URL = ENDPOINT + POST_PATH;

class APIHTTPClient {
  constructor() {
    this.getUser = this.getUser.bind(this);
    this.getPost = this.getPost.bind(this);
    this.getPostsByUser = this.getPostsByUser.bind(this);
    this.getUserByUsername = this.getUserByUsername.bind(this);
    this.getDefaultUser = this.getDefaultUser.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  getUser(id: string): Promise<UserData> {
    return axios
      .get(USER_REQUEST_URL, {
        params: {
          id: id
        },
        headers: {
          "Access-Control-Allow-Origin": "*"
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

  getUserByUsername(username: string): Promise<UserData> {
    return axios
      .get(USER_PATH, {
        params: {
          username: username
        },
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .catch(e => console.error(e));
  }

  getDefaultUser(): Promise<UserData> {
    return this.getUser(USER_ID);
  }

  getPost(id: string | null) {
    return axios
      .get(POST_REQUEST_URL, {
        params: {
          id: id
        },
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        response.data.content = JSON.parse(response.data.content);
        return response.data;
      })
      .catch(e => console.error(e));
  }

  getPostsByUser(userId: string, createdAt?: number) {
    return axios
      .get(POST_REQUEST_URL, {
        params: {
          userId: userId,
          createdAt: createdAt
        },
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => response.data)
      .catch(e => console.error(e));
  }

  submitPost(postData: PostData) {
    return axios
      .post(
        POST_REQUEST_URL,
        {
          userId: USER_ID,
          title: postData.title,
          content: JSON.stringify(postData.content)
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*"
          }
        }
      )
      .then(response => response.data)
      .catch(e => console.error(e));
  }
}

export default APIHTTPClient;
