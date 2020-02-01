import { DataMapper } from "@aws/dynamodb-data-mapper";
import User from "../models/User";
const uuid = require("uuid/v4");

export default class UserRequest {
  dynamoDBMapper: DataMapper;
  static TAG = "[UserRequest]: ";

  constructor(dynamoDBMapper: DataMapper) {
    this.dynamoDBMapper = dynamoDBMapper;
  }

  async getUser(id: string) {
    try {
      return this.dynamoDBMapper.get(
        Object.assign(new User(), {
          id: id
        })
      );
    } catch (e) {
      console.error(UserRequest.TAG, "An error occurred", e);
      throw "An error occurred" + e;
    }
  }

  async getUserByUsername(username: string) {
    try {
      for await (const user of this.dynamoDBMapper.query(
        User,
        {
          username: username
        },
        {
          indexName: "username-index"
        }
      )) {
        if (user.id) {
          return await this.getUser(user.id);
        }
      }
      return null;
    } catch (e) {
      console.error(UserRequest.TAG, "An error occurred", e);
      throw "An error occurred retrieving a user by username" + e;
    }
  }

  async createUser(user: User): Promise<User> {
    if (!user.username) {
      throw "A User object must have a username attribute";
    }
    if (/^[0-9a-zA-Z]+$/.test(user.username) === false) {
      throw "The provided username in User object was invalid " + user.username;
    }
    let existingUser = await this.getUserByUsername(user.username);
    if (existingUser) {
      throw "A user with the provided User object's username attribute already exists";
    }
    user.id = uuid();
    user.createdAt = Date.now();
    return this.saveUser(user);
  }

  async saveUser(user: User): Promise<User> {
    try {
      let objectSaved = await this.dynamoDBMapper.put(user);
      console.log(UserRequest.TAG, `User saved to DynamoDB`, await objectSaved);
      return await objectSaved;
    } catch (e) {
      console.error(UserRequest.TAG, "An error occurred saving User", user, e);
      throw "An error occurred saving User";
    }
  }
}
export { User };
