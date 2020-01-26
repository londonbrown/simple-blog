import {
    attribute,
    autoGeneratedHashKey,
    table
} from '@aws/dynamodb-data-mapper-annotations';

@table("users")
export default class User {
    @autoGeneratedHashKey()
    id?: string;

    @attribute()
    username: string;

    @attribute()
    email: string;
}