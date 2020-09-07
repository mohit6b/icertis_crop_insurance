const express = require('express');
const bodyParser = require('body-parser');
const Insurance = require('./Insurance');

const fs = require('fs');
const mergeJSON = require("merge-json") ;


const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json());


app.get('/',  (req, res) => {

  res.json({hi : "Policy Data"});
});



app.get('/extractor', async (req, res) => { 
      
    // Use child_process.spawn method from  
    // child_process module and assign it 
    // to variable spawn 
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
    // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
    // so, first name = Mike and last name = Will 
    var process = spawn('python3',["./extractor.py"] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        res.json(data); 
    } ) 
}); 




app.get('/getpolicy', async (req, res) => {
  const insurance = new Insurance();
  const policyData = await insurance.getPolicies(1008);
  console.log('PolicyData', policyData);
  res.json(policyData);
});


app.get('/getinsurancelist', async (req, res) => {
  const insurance = new Insurance();
  const insuranceListData = await insurance.getListInsurance();
  console.log('Insurance List Data', insuranceListData);
  res.json(insuranceListData);
});


app.get('/getpolicystatus', async (req, res) => {
  const insurance = new Insurance();
  const policyStatusResponseData = await insurance.getThePolicyStatus(1008, 10000011);
  console.log('Insurance Policy Status Response Data', policyStatusResponseData);
  res.json(policyStatusResponseData);
});


/*
app.get('/Order/list', async (req, res) => {
  const buyer = new Buyer();
  const orderListData = await buyer.getOrderList();
  console.log('orderlistdata', orderListData);
  res.json(orderListData);
});

*/

app.post('/setpolicy',  async (req, res) => { 
  const insurance = new Insurance();
  const policy_addData = await insurance.setNewPolicy(40404, 2020, "20/10/2019", "20/11/2020");

//req.body._TotalCoverAmount, req.body._PremiumAmount, req.body._StartDate, req.body._ExpiryDate

  console.log('policy_addData', policy_addData);
  res.json(policy_addData);
});

app.post('/setfarmer',  async (req, res) => { 
  const insurance = new Insurance();
  const newFarmerData = await insurance.setNewFarmer("Utkarsh", "Vardhan", 10000011, "Rewari", 123401, "Har/Rew/Baw/NSPG", "(112.60, 772.90)");

//req.body._TotalCoverAmount, req.body._PremiumAmount, req.body._StartDate, req.body._ExpiryDate

  console.log('policy_addData', newFarmerData);
  res.json(newFarmerData);
});

app.post('/createclaim',  async (req, res) => { 
  const insurance = new Insurance();
  const claimCreationResponse = await insurance.generateClaim(1008);

//req.body._TotalCoverAmount, req.body._PremiumAmount, req.body._StartDate, req.body._ExpiryDate

  console.log('Claim Creation Response', claimCreationResponse);
  res.json(claimCreationResponse);
});

app.post('/payclaim',  async (req, res) => { 
  const insurance = new Insurance();
  const claimPaymentResponse = await insurance.payTheClaim(1008);

//req.body._TotalCoverAmount, req.body._PremiumAmount, req.body._StartDate, req.body._ExpiryDate

  console.log('Claim Payment Response', claimPaymentResponse);
  res.json(claimPaymentResponse);
});

// edit
app.post('/verifyclaim',  async (req, res) => { 
  const insurance = new Insurance();
  const claimVerificationResponse = await insurance.verifyTheClaim(1008);

//req.body._TotalCoverAmount, req.body._PremiumAmount, req.body._StartDate, req.body._ExpiryDate

  console.log('Claim Verification Response', claimVerificationResponse);
  res.json(claimVerificationResponse);
});



app.listen(PORT, () => console.log(`Listening on ${PORT}`));

