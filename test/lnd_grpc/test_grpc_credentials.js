const {test} = require('tap');

const grpcCredentials = require('./../../lnd_grpc/grpc_credentials');

const tests = [
  {
    args: {},
    description: 'A macaroon is required for gRPC credentials',
    error: 'ExpectedBase64OrHexEncodedMacaroonToCreateCredentials',
  },
  {
    args: {macaroon: '00'},
    description: 'gRPC credentials are returned',
    expected: {},
  },
];

tests.forEach(({args, error, description}) => {
  return test(description, async ({end, equal, throws}) => {
    if (!!error) {
      throws(() => grpcCredentials(args), new Error(error), 'Got error');
    } else {
      equal(!!grpcCredentials(args).credentials, true, 'Got credentials');
    }

    return end();
  });
});
