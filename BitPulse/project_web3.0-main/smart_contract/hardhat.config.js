// https://eth-sepolia.g.alchemy.com/v2/Y9-eiUJZ0Bmb9mRZqd1BCir9dCLkK53I

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Y9-eiUJZ0Bmb9mRZqd1BCir9dCLkK53I',
      accounts: ['9c5fe94a33bfe7625b093c4b3392955b8abe124cd9c157eedaace828529c73b8'],
    },
  },
};
