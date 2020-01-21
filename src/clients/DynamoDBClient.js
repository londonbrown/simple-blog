import DynamoDB from "aws-sdk/clients/dynamodb";

module.exports = new DynamoDB({
    region: process.env.AWS_REGION || 'us-west-2'
});
