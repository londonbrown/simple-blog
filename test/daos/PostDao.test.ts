import PostDao, {Post} from './../../daos/PostDao';
const sinon = require("sinon");
import { expect } from 'chai';
import 'mocha'
import {DataMapper} from "@aws/dynamodb-data-mapper";

let postDao;

const mapper = sinon.mock(DataMapper);
mapper.get = () => "getMethod";

const expectedPostId = "aas1-bbb000-000-1ddd";
const expectedCreatedAt = 1234567890;
const expectedTitle = "Test title";
const expectedUserId = "012-example-userId";
const content = "Lorem ipsum and random words";
const expectedTags = [
    "blog",
    "test"
];

beforeEach(() => {
    console.log("\nSTARTING NEXT TEST\n");
    postDao = new PostDao(mapper);
});

describe("Test Suite: getPost ", async () => {

    it('getPost_happyCase', async () => {
        // Given
        const expectedPost = new Post();

        expectedPost.id = expectedPostId;
        expectedPost.createdAt = expectedCreatedAt;
        expectedPost.title = expectedTitle;
        expectedPost.content = content;
        expectedPost.userId = expectedUserId;
        expectedPost.tags = expectedTags;

        const get = sinon.stub(mapper, "get");
        get.returns(expectedPost);

        // When
        const actualPost = await postDao.getPost("1");

        // Then
        expect(actualPost).to.equal(expectedPost);

    });


});

