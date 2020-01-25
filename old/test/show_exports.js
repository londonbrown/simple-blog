const {handler, Post} = require("./../dist/PostHandler");
const PostDao = require("./../src/daos/PostDao");
const DynamoDBMapper = require("./../src/daos/DynamoDBMapper");
const uuid = require("uuid");
const myPost = new Post;
myPost.author = "London";
myPost.content = "This is post content";
myPost.createdAt = Date.now();
myPost.id = uuid.v4();
const postDao = new PostDao.default(DynamoDBMapper.default);

const post = postDao.getPost("dae8bffa-091b-4df7-a1b6-30b5ad747c04");
post.then(async (itemIterator) => {
    for await(let item of itemIterator) {
        console.log(item);
    }
});

console.log(handler());
