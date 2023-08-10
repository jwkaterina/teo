// This file is used to override the REST API resources configuration
import { AmplifyApiRestResourceStackTemplate, AmplifyProjectInfo } from '@aws-amplify/cli-extensibility-helper';

export function override(resources: AmplifyApiRestResourceStackTemplate, amplifyProjectInfo: AmplifyProjectInfo) {
    resources.addCfnParameter(
        {
            type: "String",
            description:
            "The id of an existing User Pool to connect. If this is changed, a user pool will not be created for you.",
            default: "NONE",
        },
        "AuthCognitoUserPoolId",
        {
            "Fn::GetAtt": ["authteof808668c", "Outputs.UserPoolId"],
        }
    );
    // create the authorizer using the AuthCognitoUserPoolId parameter defined above
    resources.restApi.addPropertyOverride("Body.securityDefinitions",
    {
        Cognito: {
            type: "apiKey",
            name: "Authorization",
            in: "header",
            "x-amazon-apigateway-authtype": "cognito_user_pools",
            "x-amazon-apigateway-authorizer": {
                type: "cognito_user_pools",
                providerARNs: [
                    {
                        "Fn::Join": [
                            "",
                            [
                                "arn:aws:cognito-idp:",
                                {
                                    Ref: "AWS::Region",
                                },
                                ":",
                                {
                                    Ref: "AWS::AccountId",
                                },
                                ":userpool/",
                                {
                                    Ref: "AuthCognitoUserPoolId",
                                },
                            ],
                        ],
                    },
                ],
            },
        },
    });
    // for each path in the rest API, add the authorizer for all methods
    for (const path in resources.restApi.body.paths) {
        // add the Authorization header as a parameter to the rest API for the path
        resources.restApi.addPropertyOverride(
            `Body.paths.${path}.x-amazon-apigateway-any-method.parameters`,
            [
                ...resources.restApi.body.paths[path]["x-amazon-apigateway-any-method"].parameters,
                {
                    name: "Authorization",
                    in: "header",
                    required: false,
                    type: "string",
                },
            ]
        );
        // set the security method to use our user pool authorizer
        // TODO: do we need to destructure the other security methods as well?
        // if you want to use access_token replace [] with  ['aws.cognito.signin.user.admin']
        resources.restApi.addPropertyOverride(
            `Body.paths.${path}.x-amazon-apigateway-any-method.security`,
            [
                {
                    Cognito: [],
                },
            ]
        );
    }

}
