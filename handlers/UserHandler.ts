import UserDao from "./../daos/UserDao";
import DynamoDBMapper from "../daos/DynamoDBMapper";

import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';

const userDao = new UserDao(DynamoDBMapper);

export const index: APIGatewayProxyHandler = async (event, _context) => {
    const {httpMethod} = event;

    let queryEvent;
    if (httpMethod.toLocaleUpperCase() === "GET") {
        queryEvent = await getUser(event);
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

async function getUser(event): Promise<object> {
    let id = null;
    if (event.queryStringParameters) {
        id = event.queryStringParameters.id ? event.queryStringParameters.id : null
    }
    return userDao.getUser(id);
}
