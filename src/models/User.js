import {
    attribute,
    hashKey,
    table
} from '@aws/dynamodb-data-mapper-annotations';

@table("users")
class User {
    @hashKey()
    id: string;

    @attribute()
    displayName: string;

    @attribute()
    avatarId: string
}
module.exports = User;
