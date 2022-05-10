// https://eth-ropsten.alchemyapi.io/v2/qXgobOhd47ZgCSdHPa8C1jycYyeXtv0r


require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/qXgobOhd47ZgCSdHPa8C1jycYyeXtv0r",
      // Account private key
      accounts: ['fd915a07b9cbc409abbc4042d2aea5e0e2cd44c53d1d87d2dafb841868decaeb']
    }
  }
}