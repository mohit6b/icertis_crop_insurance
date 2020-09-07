const web3 = require('../web3');
const CattleAfty = require('../build/CattleAfty.json');

const instance = new web3.eth.Contract(
  JSON.parse(CattleAfty.interface),
  '0x4456b27A230712a67c1c28D6A1c3f5109751dd81',
);

module.exports = instance;
