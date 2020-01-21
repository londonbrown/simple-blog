import {
    attribute,
    hashKey,
    rangeKey,
    table,
} from '@aws/dynamodb-data-mapper-annotations';

@table("posts")
class Post {

    @hashKey()
    id: string;

    @attribute({defaultProvider: () => new Date()})
    timestamp: Date;

    @attribute()
    title: string;

    @attribute()
    author: string;

    @attribute()
    content: string;

    @attribute()
    tags: string[];
}
module.exports = Post;
