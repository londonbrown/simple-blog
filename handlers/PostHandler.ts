import PostDao, {Post} from "./../daos/PostDao";
import DynamoDBMapper from "../daos/DynamoDBMapper";

import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

const postDao = new PostDao(DynamoDBMapper);

export const index: APIGatewayProxyHandler = async (event, _context) => {
    try {
        const {httpMethod} = event;

        let queryEvent;
        if (httpMethod.toLocaleUpperCase() === "GET") {
            if (event.queryStringParameters) {
                const {queryStringParameters} = event;
                if (queryStringParameters.id || queryStringParameters.userId) {
                    queryEvent = await getPost(event);
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
    } catch (e) {
        return {
            statusCode: 400,
            body: JSON.stringify(e)
        }
    }
};

async function getPost(event): Promise<any> {
    if (event.queryStringParameters.hasOwnProperty("id")) {
        return postDao.getPost(event.queryStringParameters.id);
    } else if (event.queryStringParameters.hasOwnProperty("userId")) {
        return postDao.getPostsByUser(event.queryStringParameters.userId, event.queryStringParameters.createdAt);
    } else {
        throw PostDao.TAG + "GET /post expects an id or userId parameter";
    }
}
