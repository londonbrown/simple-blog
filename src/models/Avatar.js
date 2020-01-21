import {
    attribute,
    hashKey,
    table
} from '@aws/dynamodb-data-mapper-annotations';

@table("avatars")
class Avatar {
    @hashKey()
    id: string;

    @attribute()
    s3Key: string;
}
