const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //In browser and has metamask
  web3 = new Web3(window.web3.currentProvider);
} else {
  const provider = new HDWalletProvider(
    'dress steel phrase album average giggle sad room exile web divert cause',
    'https://rinkeby.infura.io/I7P2ErGiQjuq4jNp41OE',
  );
 // const provider = new Web3(new Web3.providers.HttpProvider("http://testkm-dns-reg1.southindia.cloudapp.azure.com:8545"));
  web3 = new Web3(provider);
}

module.exports = web3;
