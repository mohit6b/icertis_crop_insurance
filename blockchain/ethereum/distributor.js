const web3 = require('../web3');
const Distributor = require('../build/Distributor.json');

const instance = new web3.eth.Contract(
  JSON.parse(Distributor.interface),
  '0x5761FB1cA5D31c2dC90e834f60a69a5D525976b3',
);

module.exports = instance;
