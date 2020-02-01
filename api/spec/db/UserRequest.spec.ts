import UserRequest, { User } from "../../db/UserRequest";

const chalk = require("chalk");
const sinon = require("sinon");
import { expect } from "chai";
import "mocha";
import { DataMapper } from "@aws/dynamodb-data-mapper";

let userDao;

const expectedId = "01234-aaaa-zzzz";
const expectedUsername = "expectedUsername";

const mapper = sinon.mock(DataMapper);
mapper.get = () => "getMethod";

beforeEach(() => {
  userDao = new UserRequest(mapper);
});

describe("UserRequest", async function() {
  context("Happy Cases", function() {
    it("getUser_happyCase", async function() {
      console.log(chalk.bold.blue("\nUserRequest Tests"));
      console.log(chalk.bold.yellow("\ngetUser_happyCase Test"));
      // Given
      const expectedUser = new User();
      expectedUser.id = expectedId;
      expectedUser.username = expectedUsername;

      const get = sinon.stub(mapper, "get");
      get.returns(expectedUser);

      // When
      const actualUser = await userDao.getUser("1");

      // Then
      expect(actualUser).to.equal(expectedUser);
      console.log(chalk.bold(chalk.green("\nExpected")), expectedUser);
      console.log(chalk.bold(chalk.green("\nActual")), actualUser);
    });
  });
});
