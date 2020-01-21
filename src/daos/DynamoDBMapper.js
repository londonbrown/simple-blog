import {DataMapper} from '@aws/dynamodb-data-mapper';
import DynamoDBClient from '../clients/DynamoDBClient';

module.exports = new DataMapper({
    client: DynamoDBClient
});
