const web3 = require('../web3');
const Buyer = require('../build/Buyer.json');

const instance = new web3.eth.Contract(
  JSON.parse(Buyer.interface),
  '0x35a4FaC6Cc426D947863bB34a241512e45983f35',
);

module.exports = instance;
