To run this project you need to

 1. Add your wallet private key to `.env` file: `WALLET_PK= <your key goes here>`
 2. Run `yarn`
 3. Run `yarn start`
 4. For tests `yarn test`

The default port is 5000, which can be changes via `.env` as well
The only route we have, is POST `/update` , which accepts `{value: "some text"}` body data
