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
const User_1 = __importDefault(require("../models/User"));
class UserDao {
    constructor(dynamoDBMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dynamoDBMapper.query(User_1.default, {
                id: id
            });
        });
    }
    saveUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            this.dynamoDBMapper.put(user).then(objectSaved => {
                console.log(`User saved to DynamoDB`, objectSaved);
                return objectSaved;
            }).catch(err => {
                console.error("An error occurred saving User", user, err);
                return null;
            });
        });
    }
}
exports.default = UserDao;
;
//# sourceMappingURL=UserDao.js.map