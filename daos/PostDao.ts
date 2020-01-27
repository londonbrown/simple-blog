import {DataMapper} from "@aws/dynamodb-data-mapper/build/DataMapper";
import {greaterThanOrEqualTo} from "@aws/dynamodb-expressions";

import Post from "../models/Post";

export default class PostDao {
    dynamoDBMapper: DataMapper;
    constructor(dynamoDBMapper: DataMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    async getPost(id: string): Promise<Post> {
        try {
            let post = await this.dynamoDBMapper.get(Object.assign(new Post, {
                id: id
            }));
            if (post.tags) {
                post.tags = Array.from(post.tags);
            }
            return post;
        } catch (e) {
            console.error("\n\nAN ERROR OCCURRED\n\n", e);
        }
    }

    async getPostsByUser(userId: string, createdAt?: number): Promise<Array<Post>> {
        const sevenDaysEpoch = 604800000;
        createdAt = createdAt ? createdAt : Date.now() - sevenDaysEpoch;
        try {
            let posts = new Array<Post>();
            for await (const post of this.dynamoDBMapper.query(Post, {
                userId: userId,
                createdAt: greaterThanOrEqualTo(createdAt)
            }, {
                indexName: 'userId-createdAt-index'
            })) {
                if (post.tags) {
                    post.tags = Array.from(post.tags);
                }
                posts.push(post)
            }
            return posts;
        } catch (e) {
            console.error("\n\nAN ERROR OCCURRED\n\n", e);
        }
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
