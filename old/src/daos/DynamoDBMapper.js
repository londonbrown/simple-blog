"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dynamodb_data_mapper_1 = require("@aws/dynamodb-data-mapper");
const DynamoDBClient_1 = __importDefault(require("../clients/DynamoDBClient"));
exports.default = new dynamodb_data_mapper_1.DataMapper({
    client: DynamoDBClient_1.default
});
//# sourceMappingURL=DynamoDBMapper.js.map