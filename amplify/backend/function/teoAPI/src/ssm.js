const { SSMClient, GetParametersByPathCommand } = require('@aws-sdk/client-ssm');

const ssmClient = new SSMClient({});

async function getAlbumId() {

    try {
        const params = await getSsmParams();

        return params.albumId;
    } catch(err) {
        console.log("Cannot get SSM Params:", err);
        return null
    }
}

async function getSsmParams() {
    const paramPrefix = `/amplify/teoSecrets/${process.env["ENV"]}/`;

    const { Parameters } = await ssmClient.send(
        new GetParametersByPathCommand({
        Path: paramPrefix,
        WithDecryption: true,
        })
    );

    return Parameters.reduce((acc, param) => {
        const key = param.Name.split('/').pop();
        acc[key] = param.Value;
        return acc;
    }, {});
}

module.exports = {
    getAlbumId,
};