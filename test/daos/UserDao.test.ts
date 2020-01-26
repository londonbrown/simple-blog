import UserDao, {User} from "../../daos/UserDao";

const sinon = require("sinon");
import { expect } from 'chai';
import 'mocha'
import {DataMapper} from "@aws/dynamodb-data-mapper";

let userDao;

const expectedId = "01234-aaaa-zzzz";
const expectedUsername = "expectedUsername";
const expectedEmail = "user@example.com";

const mapper = sinon.mock(DataMapper);
mapper.get = () => "getMethod";

beforeEach(() => {
    console.log("\nSTARTING NEXT TEST\n");
    userDao = new UserDao(mapper);
});

describe("Test Suite: UserDao ", () => {
    context("getPost", () => {
        it('getPost_happyCase', async () => {
            // Given
            const expectedUser = new User();
            expectedUser.id = expectedId;
            expectedUser.username = expectedUsername;
            expectedUser.email = expectedEmail;

            const get = sinon.stub(mapper, "get");
            get.returns(expectedUser);

            // When
            const actualUser = await userDao.getUser("1");

            // Then
            expect(actualUser).to.equal(expectedUser);

        });
    })


});
