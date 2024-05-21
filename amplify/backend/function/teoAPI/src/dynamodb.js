const https = require('https');
const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, GetCommand, QueryCommand, PutCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb');

const ddbClient = new DynamoDBClient({ 
  region: process.env.TABLE_REGION,
  httpOptions: {
    agent: new https.Agent({ keepAlive: true }),
    timeout: 1000,
    connectionTimeout: 1000,
  }
});
const ddbDocClient = DynamoDBDocumentClient.from(ddbClient);

let tableName = "teo";
if (process.env.ENV && process.env.ENV !== "NONE") {
    tableName = tableName + '-' + process.env.ENV;
}

async function queryEntities(condition) {
  let params = {
      TableName: tableName,
      KeyConditions: condition
  }

  const { Items } = await ddbDocClient.send(new QueryCommand(params));

  return Items;
}

async function getEntity(params) {
  let getItemParams = {
      TableName: tableName,
      Key: params
  }

  const { Item } = await ddbDocClient.send(new GetCommand(getItemParams));

  return Item;
}

async function putEntity(entity) {
  let putItemParams = {
      TableName: tableName,
      Item: entity.toDynamoDbItem()
  }
  const { Attributes } = await ddbDocClient.send(new PutCommand(putItemParams));

  return Attributes;
}

async function postEntity(entity) {
  let putItemParams = {
      TableName: tableName,
      Item: entity.toDynamoDbItem(),
      ConditionExpression: "attribute_not_exists(SK)"
  }
  const { Attributes } = await ddbDocClient.send(new PutCommand(putItemParams));

  return Attributes;
}

async function deleteEntity(params) {
  let removeItemParams = {
      TableName: tableName,
      Key: params
  }
  const { Attributes } = await ddbDocClient.send(new DeleteCommand(removeItemParams));

  return Attributes;
}

let googleTableName = "amplify-d1usx0w4bl28pz-main-branch-010e8553d4-dbstackAFFC52F0-EJZ511F6RC7C-googletokenDFE2D47F-IRJOKFPR9X3P";

async function getGoogleAccessToken() {
  const params = {
    TableName: googleTableName,
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
    queryEntities,
    getEntity,
    putEntity,
    postEntity,
    deleteEntity,
    getGoogleAccessToken
};