import { DataMapper } from "@aws/dynamodb-data-mapper";
import DynamoDBClient from "../clients/DynamoDBClient";

export default new DataMapper({
  client: DynamoDBClient
});
