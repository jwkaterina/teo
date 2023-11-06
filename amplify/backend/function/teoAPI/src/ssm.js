const { SSMClient, GetParameterCommand } = require('@aws-sdk/client-ssm');

const ssmClient = new SSMClient({});

async function getAlbumId() {

    try {
        const albumId = await getSsmParams("teoAlbumId");

        return albumId;
    } catch(err) {
        console.log("Cannot get SSM Params:", err);
        return null
    }
}

async function getSsmParams(key) {

    const { Parameters } = await ssmClient.send(
        new GetParameterCommand({
        Name: process.env[key],
        WithDecryption: true,
        })
    );

    return Parameters[0].Value;
}

module.exports = {
    getAlbumId,
};