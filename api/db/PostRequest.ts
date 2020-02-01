import { DataMapper } from "@aws/dynamodb-data-mapper/build/DataMapper";
import { greaterThanOrEqualTo } from "@aws/dynamodb-expressions";

const uuid = require("uuid/v4");

import Post from "../models/Post";

export default class PostRequest {
  dynamoDBMapper: DataMapper;
  static TAG = "[PostRequest]: ";

  constructor(dynamoDBMapper: DataMapper) {
    this.dynamoDBMapper = dynamoDBMapper;
  }

  async getPost(id: string): Promise<Post> {
    try {
      let post = await this.dynamoDBMapper.get(
        Object.assign(new Post(), {
          id: id
        })
      );
      if (post.tags) {
        post.tags = Array.from(post.tags);
      }
      return post;
    } catch (e) {
      console.error(e);
      console.error(PostRequest.TAG, "An error occurred", e);
      return null;
    }
  }

  async getPostsByUser(
    userId: string,
    createdAt?: number
  ): Promise<Array<Post>> {
    const thirtyDaysMS = 2592000000;
    createdAt = Number(createdAt ? createdAt : Date.now() - thirtyDaysMS);
    try {
      let posts = new Array<Post>();
      for await (const post of this.dynamoDBMapper.query(
        Post,
        {
          userId: userId,
          createdAt: greaterThanOrEqualTo(createdAt)
        },
        {
          indexName: "userId-createdAt-index",
          limit: 10
        }
      )) {
        if (post.tags) {
          post.tags = Array.from(post.tags);
        }
        posts.push(post);
      }
      return posts;
    } catch (e) {
      console.error(PostRequest.TAG, "An error occurred", e);
    }
  }

  private static verifyPostObject(post: Post): boolean {
    if (!post.userId) {
      throw "A Post object must have a userId attribute";
    }
    if (!post.title) {
      throw "A Post object must have a title attribute";
    }
    if (!post.content) {
      throw "A Post object must have a content attribute";
    }
    if (!post.id) {
      throw "A Post object must have an id attribute";
    }
    return true;
  }

  async updatePost(post: Post) {
    if (PostRequest.verifyPostObject(post)) {
      let existingPost = await this.getPost(post.id);
      if (existingPost == null) {
        throw "Post does not exist with provided id";
      }
      if (existingPost.userId !== post.userId) {
        throw "New Post object has a different userId than the original Post";
      }
      for (let attr of Object.keys(post)) {
        existingPost[attr] = post[attr];
        console.log(typeof existingPost[attr]);
        console.log(typeof post[attr]);
      }
      console.log(existingPost);
      return this.savePost(existingPost);
    }
  }

  async createPost(post: Post) {
    post.id = uuid();
    post.createdAt = Date.now();
    if (PostRequest.verifyPostObject(post)) {
      return this.savePost(post);
    }
  }

  async savePost(post: Post) {
    try {
      let objectSaved = await this.dynamoDBMapper.put(post);
      console.log(PostRequest.TAG, "Post saved to DynamoDB", objectSaved);
      return objectSaved;
    } catch (e) {
      console.error(PostRequest.TAG, "An error occurred saving Post", post, e);
      throw "An error occurred saving User";
    }
  }
}
export { Post };
