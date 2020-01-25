"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("../models/Post"));
class PostDao {
    constructor(dynamoDBMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }
    getPost(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dynamoDBMapper.query(Post_1.default, {
                id: id
            });
        });
    }
    getPostsByUser(userId, createdAt) {
        return __awaiter(this, void 0, void 0, function* () {
            /* if (!createdAt) {
                 // get timestamp of 7 days ago
             }
             return this.dynamoDBMapper.query(Post, {
                 "partitionKey": userId,
                 "rangeKey": greaterThan(createdAt)
             })*/
        });
    }
    savePost(post) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dynamoDBMapper.put(post).then(objectSaved => {
                console.log(`Post saved to DynamoDB`, objectSaved);
                return objectSaved;
            }).catch(err => {
                console.error("An error occured saving Post", post, err);
                return null;
            });
        });
    }
}
exports.default = PostDao;
;
//# sourceMappingURL=PostDao.js.map