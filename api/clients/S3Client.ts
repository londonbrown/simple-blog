import { S3 } from "aws-sdk";

export default new S3({
  region: process.env.AWS_REGION || "us-west-2"
});
