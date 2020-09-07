const web3 = require('../web3');
const Insurance = require('../build/insurance.json');

//0x66464892cd6609c4d1047e367fdeac817affd633
//0xC1447ED912B3fddD2E75049271eb5B55cb4CB8dc azure
const instance = new web3.eth.Contract(
  JSON.parse(Insurance.interface),
  '0x66464892cd6609c4d1047e367fdeac817affd633',
);

module.exports = instance;
