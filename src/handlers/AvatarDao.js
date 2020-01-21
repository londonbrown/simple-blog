import {DataMapper} from "@aws/dynamodb-data-mapper";

import Avatar from "../models/Avatar";

module.exports = class AvatarDao {
    dynamoDBMapper: DataMapper;

    constructor(dynamoDBMapper: DataMapper) {
        this.dynamoDBMapper = dynamoDBMapper;
    }

    async getAvatar(id: string) {
        return this.dynamoDBMapper.query(Avatar, {
            id: id
        })
    }

    async saveAvatar(avatar: Avatar) {
        this.dynamoDBMapper.put(avatar).then(objectSaved => {
            console.log(`Avatar saved to DyanmoDB`, objectSaved);
            return objectSaved;
        }).catch(err => {
            console.error("An error occurred saving Avatar", avatar, err);
            return null;
        });
    }
};
