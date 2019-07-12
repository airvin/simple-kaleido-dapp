const path = require("path");
var Web3 = require('web3');
const dotenv = require('dotenv');

dotenv.config()

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  compilers: {
    solc: {
      version: "0.5.0",
    },
  },
  networks: {
    development: {
      provider: () => {
        return new Web3.providers.HttpProvider(`https://${process.env.APP_CRED}@${process.env.CONNECTION_URL}`, 100000);
      },
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 4500000,
      /* type: 'quorum' // Use this property for Quorum environments */
    },
  }
};
