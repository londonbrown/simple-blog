import {DataMapper} from "@aws/dynamodb-data-mapper";
import {greaterThan} from "@aws/dynamodb-expressions";

import Post from "../models/Post";

export class PostDao {
    dynamoDBMapper: DataMapper;
    constructor(dynamoDBMapper: DataMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    async getPost(id: string) {
        return this.dynamoDBMapper.query(Post, {
            id: id
        });
    }

    async getPostsByUser(userId: string, createdAt?: number) {
       /* if (!createdAt) {
            // get timestamp of 7 days ago
        }
        return this.dynamoDBMapper.query(Post, {
            "partitionKey": userId,
            "rangeKey": greaterThan(createdAt)
        })*/
    }

    async savePost(post: Post) {
        this.dynamoDBMapper.put(post).then(objectSaved => {
            console.log(`Post saved to DynamoDB`, objectSaved);
            return objectSaved;
        }).catch(err => {
            console.error("An error occured saving Post", post, err);
            return null;
        });
    }
}
