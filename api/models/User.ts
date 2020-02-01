import {
  attribute,
  hashKey,
  table
} from "@aws/dynamodb-data-mapper-annotations";

@table("users")
export default class User {
  @hashKey()
  id: string;

  @attribute({
    indexKeyConfigurations: {
      "username-index": "HASH"
    }
  })
  username: string;

  @attribute({ defaultProvider: () => Date.now() })
  createdAt?: number;
}
