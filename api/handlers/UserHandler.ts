import UserRequest, {User} from "../db/UserRequest";
import DynamoDBMapper from "../db/DynamoDBMapper";

import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

const userRequest = new UserRequest(DynamoDBMapper);

export const index: APIGatewayProxyHandler = async (event, _context) => {
    try {
        const {httpMethod} = event;

        let queryEvent;
        if (httpMethod.toLocaleUpperCase() === "GET") {
            queryEvent = await getUser(event);
        } else if (httpMethod.toLocaleUpperCase() === "POST") {
            const body = JSON.parse(event.body);
            queryEvent = await createUser(body);
        }
        else {
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

async function getUser(event): Promise<object> {
    if (event.queryStringParameters.hasOwnProperty('id')) {
        return userRequest.getUser(event.queryStringParameters.id);
    } else if (event.queryStringParameters.hasOwnProperty('username')) {
        return userRequest.getUserByUsername(event.queryStringParameters.username)
    } else {
        throw UserRequest.TAG + "GET /user expects an id or username parameter"
    }
}

async function createUser(body) {
    if (!body.hasOwnProperty("username")) {
        throw UserRequest.TAG + "POST /user Expected a username property in request"
    }
    const username = body.username;
    const user = new User();
    user.username = username;
    return userRequest.createUser(user);
}
