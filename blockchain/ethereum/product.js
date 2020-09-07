const web3 = require('../web3');
const Product = require('../build/Product.json');

const instance = new web3.eth.Contract(
  JSON.parse(Product.interface),
  '0xBF830f4131a97D977B26978D08854a98fAd54b58',
);

module.exports = instance;
