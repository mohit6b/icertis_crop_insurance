const web3 = require('../web3');
const Customer = require('../build/Customer.json');

const instance = new web3.eth.Contract(
  JSON.parse(Customer.interface),
  '0xd18D2e3e67796Da60DEb596E2B2F014A553Cd937',
);

module.exports = instance;
