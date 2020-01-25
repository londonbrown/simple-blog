"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamodb_1 = __importDefault(require("aws-sdk/clients/dynamodb"));
exports.default = new dynamodb_1.default({
    region: process.env.AWS_REGION || 'us-west-2'
});
//# sourceMappingURL=DynamoDBClient.js.map