import DynamoDB from "aws-sdk/clients/dynamodb";

export default new DynamoDB({
    region: process.env.AWS_REGION || 'us-west-2'
});
