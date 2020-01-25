import {DataMapper} from "@aws/dynamodb-data-mapper/build/DataMapper";
//import {greaterThan} from "@aws/dynamodb-expressions";

import Post from "../models/Post";

export default class PostDao {
    dynamoDBMapper: DataMapper;
    constructor(dynamoDBMapper: DataMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    async getPost(id: string) {
        try {
            let post = await this.dynamoDBMapper.get(Object.assign(new Post, {
                id: id
            }));
            post.tags = Array.from(post.tags);
            return post;
        } catch (e) {
            console.error("\n\nAN ERROR OCCURRED\n\n", e);
        }
    }

    async getPostsByUser(userId: string, createdAt?: number) {

        console.log(userId, createdAt);
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
export {Post};
