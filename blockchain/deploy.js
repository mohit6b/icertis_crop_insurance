const Web3 = require('web3');
const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs-extra');
const HDWalletProvider = require('truffle-hdwallet-provider');

const buildPath = path.resolve(__dirname, 'build');
const compiledMilkContract = require('./build/MilkContract');

const provider = new HDWalletProvider(
  'dress steel phrase album average giggle sad room exile web divert cause',
  'https://rinkeby.infura.io/I7P2ErGiQjuq4jNp41OE',
);
//const provider2 = new Web3(new Web3.providers.HttpProvider("http://testkm-dns-reg1.southindia.cloudapp.azure.com:8545"));

console.log('Provider', provider);
const web3 = new Web3(provider);

const workbook = xlsx.readFile(__dirname + '/sample_data_v12.xlsx');
const sheet_name_list = workbook.SheetNames;
const xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[1]]);
const xlDataHex = JSON.stringify(web3.utils.toHex(xlData));

const campaignPath = path.resolve(buildPath, 'addresses.json');

const source = fs.readFileSync(campaignPath, 'utf8');
let addresses = [];

if(source !== '') {
  addresses = JSON.parse(source);
}

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy contract from ', accounts[0]);
  const balance = await web3.eth.getBalance(accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledMilkContract.interface))
    .deploy({ data: `0x${compiledMilkContract.bytecode}`, arguments: [xlDataHex] })
    .send({ from: accounts[0], gas: '4700000' });

  console.log('Contract deployed to ', result.options.address);

  addresses.push(result.options.address);

  fs.outputJsonSync(
    path.resolve(buildPath, 'addresses' + '.json'),
   addresses,
  );
};

deploy();
