import PostDao, {Post} from "./../daos/PostDao";
import DynamoDBMapper from "../daos/DynamoDBMapper";

import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

const postDao = new PostDao(DynamoDBMapper);

export const index: APIGatewayProxyHandler = async (event, _context) => {
    const {httpMethod} = event;

    let queryEvent;
    if (httpMethod.toLocaleUpperCase() === "GET") {
        if (event.queryStringParameters) {
            const {queryStringParameters} = event;
            if (queryStringParameters.id) {
                queryEvent = await getPost(event);
            } else if (queryStringParameters.userId) {
                queryEvent = await getPostsByUser(event);
                console.log(queryEvent);
            }
        }
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "Invalid request type. Acceptable requests are GET, POST, PUT, and DELETE"
            })
        }
    }
    return {
        statusCode: 200,
        body: JSON.stringify(queryEvent)
    };
};

async function getPost(event): Promise<Post> {
    if (!event.queryStringParameters.id) {
        throw "Post id is not defined";
    }
    let id = event.queryStringParameters.id;
    return postDao.getPost(id);
}

async function getPostsByUser(event): Promise<Array<Post>> {
    console.log("1");
    let queryStringParameters = event.queryStringParameters;
    if (!queryStringParameters.userId) {
        throw "Post userId is not defined";
    }
    let userId = event.queryStringParameters.userId;
    let createdAt = event.queryStringParameters.createdAt;
    return postDao.getPostsByUser(userId, createdAt);
}
