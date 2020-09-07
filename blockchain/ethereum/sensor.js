const web3 = require('../web3');
const Sensor = require('../build/SensorEvent.json');

const instance = new web3.eth.Contract(
  JSON.parse(Sensor.interface),
  '0xCE3aD02D735482eF24CD2F72adfA7ba8a616dC14',
);

module.exports = instance;
