const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand } = require('@aws-sdk/lib-dynamodb');

const ddbClient = new DynamoDBClient({ region: "eu-central-1" });
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

let tableName = "google";
if (process.env.ENV && process.env.ENV !== "NONE") {
  tableName = tableName + '-' + process.env.ENV;
}

async function getGoogleAccessToken() {
    const params = {
      TableName: tableName,
      Key: {
        PK: "googleApiToken",
        SK: "googleApiToken",
      },
    };
  
    try {
      const { Item } = await ddbDocClient.send(new GetCommand(params));
      console.log("token", Item.token);
      return Item.token;
    } catch (err) {
      console.log("Error getting token:", err);
      return null;
    }
}

module.exports = {
    getGoogleAccessToken,
};