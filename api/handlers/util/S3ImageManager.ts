import uuid from "uuid";
import AWS from "aws-sdk";

export default class S3ImageManager {
  private s3Client;
  constructor(s3Client: AWS.S3) {
    this.s3Client = s3Client;
  }
  uploadImageFromBase64String(base64EncodedString: string) {
    let id = uuid();
    let buffer = new Buffer(
      base64EncodedString.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    );
    let data = {
      Key: `${Date.now()}_${id}.jpg`,
      Body: buffer,
      ContentEncoding: "base64",
      ContentType: "image/jpeg"
    };
    // upload to s3
    return data.Key;
  }
}
