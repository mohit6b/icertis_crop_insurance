const web3 = require('../web3');
const TrackingDetails = require('../build/TrackingDetails.json');

const instance = new web3.eth.Contract(
  JSON.parse(TrackingDetails.interface),
  '0x8c63c873b1b89844653c58E8F8D64062ecd4d757',
);

module.exports = instance;
