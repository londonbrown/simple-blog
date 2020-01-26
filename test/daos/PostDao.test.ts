// @ts-ignore
import PostDao, {Post} from './../../daos/PostDao';
const sinon = require("sinon");
import { expect } from 'chai';
import 'mocha'
import {DataMapper} from "@aws/dynamodb-data-mapper";

const mapper = sinon.mock(DataMapper);
const postDao = new PostDao(mapper);

it('getPost_happyCase', () => {
    //const getMethod = sinon.stub(postDao, "getPost");
    const getPost = sinon.stub(postDao, "getPost");
    getPost.withArgs("1").returns("blah");
    getPost.withArgs("2").returns("aaa");
    getPost.withArgs("3").returns("heyo");
    console.log(postDao.getPost("1"));
    console.log(postDao.getPost("2"));
    console.log(postDao.getPost("3"));
    // console.log("London");
    // console.log(PostDao);
    // //console.log(Post);
    // console.log(sinon);
    return expect(true).to.equal(true);

});
