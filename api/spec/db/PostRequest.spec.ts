import PostRequest, {Post} from '../../db/PostRequest';

const chalk = require("chalk");
const sinon = require("sinon");
import { expect } from 'chai';
import DynamoDBMapper from "../../db/DynamoDBMapper";
import {QueryIterator} from "@aws/dynamodb-query-iterator";

let postDao;

const expectedPostId = "aas1-bbb000-000-1ddd";
const expectedCreatedAt = 1234567890;
const expectedTitle = "Test title";
const expectedUserId = "fcb0cf58-36e0-4d4c-8aa2-f399503eff0b";
const content = "Lorem ipsum and random words";
const expectedTags = [
    "blog",
    "test"
];

const sandbox = sinon.createSandbox();
let mapper;
let mockDynamoDbClient;

beforeEach(() => {
    sandbox.restore();
    mockDynamoDbClient = {
        config: {},
        query: sandbox.fake()
    };
    mapper = sandbox.stub(DynamoDBMapper);
    //mapper = DynamoDBMapper;
    postDao = new PostRequest(mapper);
});

afterEach(() => {
    sandbox.restore();
});

describe("PostRequest", async function() {
    context("Happy Cases", function() {
        it('getPost_happyCase', async function() {
            console.log(chalk.bold.blue("\nPostRequest Tests"));
            console.log(chalk.bold.yellow("\ngetPost_happyCase Test"));
            // Given
            const expectedPost = new Post();

            expectedPost.id = expectedPostId;
            expectedPost.createdAt = expectedCreatedAt;
            expectedPost.title = expectedTitle;
            expectedPost.content = content;
            expectedPost.userId = expectedUserId;
            expectedPost.tags = expectedTags;

            mapper.get.returns(expectedPost);

            // When
            const actualPost = await postDao.getPost("1");

            // Then
            expect(actualPost).to.equal(expectedPost);
            console.log(chalk.bold.green("\nExpected"), expectedPost);
            console.log(chalk.bold.green("\nActual"), actualPost);
        });

        it('getPostsByUser_validUser_returnsMultiplePostsFromUser', async function () {
            console.log(chalk.bold.yellow("\ngetPostsByUser_happyCase Test"));
            const testPostOne = new Post();

            testPostOne.id = expectedPostId;
            testPostOne.createdAt = expectedCreatedAt;
            testPostOne.title = expectedTitle;
            testPostOne.content = content;
            testPostOne.userId = expectedUserId;
            testPostOne.tags = expectedTags;

            const testPostTwo = new  Post();
            testPostTwo.id = "12345-abcdef-098776";
            testPostTwo.createdAt = 9876543210;
            testPostTwo.title = "Another post test example";
            testPostTwo.content = "Test content";
            testPostTwo.userId = expectedUserId;
            testPostTwo.tags = expectedTags;

            const expectedPosts = [testPostOne, testPostTwo];

            // When
            const queryIterator = {};
            queryIterator[Symbol.iterator] = sandbox.fake(() => [testPostOne, testPostTwo].values());
            mapper.query.returns(queryIterator);
            const actualPosts = await postDao.getPostsByUser(expectedUserId, expectedCreatedAt);

            // Then
            for (let post of actualPosts.values()) {
                expect(expectedPosts).to.contain(post);
            }
            console.log(chalk.bold.green("\nExpected"), expectedPosts);
            console.log(chalk.bold.green("\nActual"), actualPosts);
        });
    })
});
