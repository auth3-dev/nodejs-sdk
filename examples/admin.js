/**
 * (C)opyright 2021-present - Auth3.dev
 */
'use strict';

var a3sdk = require('..');
var grpc = require('@grpc/grpc-js');
var oauth2Client = require('client-oauth2')

// Make sure, when you write your logic to get a client token, to account for refresh and revocation.
// See the [machine-to-machine example](https://docs.auth3.dev/products/identity-platform/machine-to-machine) docs and runnable
// examples to learn more about the server-to-server interactions like this and how you have to configure a client to run
// this example.
var auth3Auth = new oauth2Client({
  clientId: process.env.AUTH3_CLIENT_ID,
  clientSecret: process.env.AUTH3_CLIENT_SECRET,
  accessTokenUri: 'https://' + process.env.AUTH3_PROJECT_ID + '.as.auth3.dev/oauth2/token',
})

/**
 * Run example.
 */
async function main() { 
    var adminClient = new a3sdk.admin.AdminClient(
        process.env.AUTH3_PROJECT_ID + '.admin.auth3.dev:443',
        grpc.credentials.createSsl(),
    );

    // As documented by the [docs](https://docs.auth3.dev/apis/identity-platform/administrative) we must provide
    // the authorization token via metadata. Specific details to do this are out of the scope of this example.
    // You can use any first-party client secret/credentials, and any library you like. Check the [docs](https://docs.auth3.dev/)
    // for examples. We suggest using a client interceptor for that, see: https://grpc.github.io/grpc/node/grpc.Client.html
    var metadata = new grpc.Metadata();
    // Check-out further examples and docs at https://docs.auth3.dev/.
    var token = await auth3Auth.credentials.getToken();
    metadata.add('authorization', 'bearer ' + token.accessToken);
    
    // Calling APIs is quite straightforward, as calling local methods:
    var request = new a3sdk.admin.GetConnectionsRequest();
    adminClient.getConnections(request, metadata, (err, response) => {
        if (err) {
            // handle error
            console.log(err);
            return;
        }

        // Handle response: see [documentation](https://docs.auth3.dev/apis/identity-platform/administrative#getconnectionsresponse)
        // for this and all other request and responses types for all API calls.
        console.log('Found the following connections: ');
        response.getConnectionsList().forEach((connection) => {
            console.log('* ' + connection.getName());
        });

        // We're going to terminate anyway, but if your application doesn't and you don't need the adminClient anymore (no future calls), 
        // don't forget to purge the client to free up resources.
        adminClient.close();
    });
}
  
if (require.main === module) {
    if (process.env.AUTH3_PROJECT_ID == null) {
        console.log('Please set the AUTH3_PROJECT_ID env var');
        return;
    }

    if (process.env.AUTH3_CLIENT_ID == null || process.env.AUTH3_CLIENT_SECRET == null) {
        console.log('Please set the AUTH3_CLIENT_ID and AUTH3_CLIENT_SECRET env var');
        return;
    }

    console.log('Connecting to: ' + process.env.AUTH3_PROJECT_ID + '.admin.auth3.dev:443');
    main();
}
