import UserDao, {User} from "./../daos/UserDao";
import DynamoDBMapper from "../daos/DynamoDBMapper";

import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import PostDao from "../daos/PostDao";

const userDao = new UserDao(DynamoDBMapper);

export const index: APIGatewayProxyHandler = async (event, _context) => {
    try {
        const {httpMethod} = event;

        let queryEvent;
        if (httpMethod.toLocaleUpperCase() === "GET") {
            queryEvent = await getUser(event);
        } else if (httpMethod.toLocaleUpperCase() === "POST") {
            try {
                const body = JSON.parse(event.body);
                queryEvent = await createUser(body);
            } catch (e) {
                throw "Error processing body of request. " + e;
            }
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
        return userDao.getUser(event.queryStringParameters.id);
    } else if (event.queryStringParameters.hasOwnProperty('username')) {
        return userDao.getUserByUsername(event.queryStringParameters.username)
    } else {
        throw UserDao.TAG + "GET /user expects an id or userId parameter"
    }
}

async function createUser(body) {
    if (!body.hasOwnProperty("username")) {
        throw PostDao.TAG + "POST /user Expected a username property in request"
    }
    const username = body.username;
    const user = new User();
    user.username = username;
    return userDao.createUser(user);
}
