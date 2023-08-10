import { AmplifyAuthCognitoStackTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyAuthCognitoStackTemplate, amplifyProjectInfo: AmplifyProjectInfo) {

    resources.userPool.addPropertyOverride("Schema", [
        {
            "Mutable": true,
            "Name": "email",
            "Required": true
        },
        {
            "AttributeDataType": "String",
            "Mutable": true,
            "Name": "access_token",
            "StringAttributeConstraints": {
                "MaxLength": "2048",
                "MinLength": "1"
            }

        },
        {
            "AttributeDataType": "String",
            "Mutable": true,
            "Name": "id_token",
            "StringAttributeConstraints": {
                "MaxLength": "2048",
                "MinLength": "1"
            }

        }
    ]);
}
