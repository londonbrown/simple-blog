import {DataMapper} from "@aws/dynamodb-data-mapper";

import Post from "../models/Post";

module.exports = class PostDao {
    dynamoDBMapper: DataMapper;

    constructor(dynamoDBMapper: DataMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    async getPost(id: string) {
        return this.dynamoDBMapper.query(Post, {
            id: id
        });
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
};
