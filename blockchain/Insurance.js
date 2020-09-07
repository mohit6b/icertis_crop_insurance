const instance = require('./ethereum/insurance');
const web3 = require('./web3');

class Insurance {
  constructor() {
    this.data = [];
  }


  async getPolicies(a) {
    try{
	var b = a;

    console.log('instance', instance);

    const accounts = await web3.eth.getAccounts();
    console.log('Account', accounts[0]);


    const getpolicydata = await instance.methods.getPolicy(b).call({from: accounts[0]});
    console.log('Policy Details', getpolicydata);
    return getpolicydata;

    }catch(e){
        console.log(e);
    }

  }


  async getListInsurance() {
    try{

    console.log('instance', instance);

    const accounts = await web3.eth.getAccounts();
    console.log('Account', accounts[0]);


    const insurancelistdata = await instance.methods.getInsuranceList().call({from: accounts[0]});
    console.log('Insurance list', insurancelistdata);
    return insurancelistdata;

    }catch(e){
        console.log(e);
    }

  }

  async getThePolicyStatus(InsuranceID, farmerId) {
    try{
	var insuranceId = InsuranceID;
	var farmerID = farmerId;

    console.log('instance', instance);

    const accounts = await web3.eth.getAccounts();
    console.log('Account', accounts[0]);


    const policystatusdata = await instance.methods.getPolicyStatus(insuranceId, farmerID).call({from: accounts[0]});
    console.log('Policy Status Response : ', policystatusdata);
    return policystatusdata;

    }catch(e){
        console.log(e);
    }

  }


  async setNewPolicy(_TotalCoverAmount, _PremiumAmount, _StartDate, _ExpiryDate){

          const _totalCoverAmount = _TotalCoverAmount;
          const _premiumAmount = _PremiumAmount;
          const _startDate = _StartDate;
          const _expiryDate = _ExpiryDate;
          console.log('instance', instance);

          try{
            const accounts = await web3.eth.getAccounts();
            if( _totalCoverAmount  && _startDate  ) {
              var policyId =  instance.methods.setPolicy(_totalCoverAmount, _premiumAmount, _startDate, _expiryDate ).send({
                from: accounts[0],
                gas: '1000000'
              });
		console.log('Policy ID', policyId);
            }else{
              console.log('Error while creating new Order');
            }
          }catch(e){
              console.log(e);
          }

//            const policyData = await instance.methods.getPolicy(policyId).call();
//            console.log('order list count', policyData);

            return policyId;

        }


 async setNewFarmer(_FirstName, _LastName, _UniqueId, _Residence, _LandArea, _LandNumber, _LandCoordinates){

          const _firstName = _FirstName;
          const _lastName = _LastName;
          const _uniqueId = _UniqueId;
          const _residence = _Residence;
          const _landArea = _LandArea;
          const _landNumber = _LandNumber;
          const _landCoordinates = _LandCoordinates;

          console.log('instance', instance);

          try{
            const accounts = await web3.eth.getAccounts();
            if( _uniqueId  && _landCoordinates  ) {
              var farmerUniqueId =  instance.methods.setFarmerData(_firstName, _lastName, _uniqueId, _residence,  _landArea, _landNumber, _landCoordinates).call({
                from: accounts[0],
                gas: '1000000'
              });
		console.log('Farmer Unique ID', farmerUniqueId);
            }else{
              console.log('Error while creating new Order');
            }
          }catch(e){
              console.log(e);
          }

//            const policyData = await instance.methods.getPolicy(policyId).call();
//            console.log('order list count', policyData);

            return farmerUniqueId;

        }

// edit
  async verifyTheClaim(_InsuranceId){

          const _insuranceId = _InsuranceId;

          console.log('instance', instance);

          try{
            const accounts = await web3.eth.getAccounts();
            if( _insuranceId) {
              var responseVerifyClaim =  instance.methods.verifyClaim(_insuranceId).call({
                from: accounts[0],
                gas: '1000000'
              });
		console.log('Respone Claim Verification : ', responseVerifyClaim);
            }else{
              console.log('Error while creating new Order');
            }
          }catch(e){
              console.log(e);
          }

            return responseVerifyClaim;

        }


  async generateClaim(_InsuranceId){

          const _insuranceId = _InsuranceId;

          console.log('instance', instance);

          try{
            const accounts = await web3.eth.getAccounts();
            if( _insuranceId ) {
              var responseCreateClaim =  instance.methods.createClaim(_insuranceId ).send({
                from: accounts[0],
                gas: '1000000'
              });
		console.log('Respone Claim Creation : ', responseCreateClaim);
            }else{
              console.log('Error while creating new Order');
            }
          }catch(e){
              console.log(e);
          }

            return responseCreateClaim;

        }


  async payTheClaim(_InsuranceId){

          const _insuranceId = _InsuranceId;

          console.log('instance', instance);

          try{
            const accounts = await web3.eth.getAccounts();
            if( _insuranceId ) {
              var responsePayClaim =  instance.methods.payClaim(_insuranceId ).call({
                from: accounts[0],
                gas: '1000000'
              });
		console.log('Respone Claim Payment : ', responsePayClaim);
            }else{
              console.log('Error while creating new Order');
            }
          }catch(e){
              console.log(e);
          }

            return responsePayClaim;

        }



}

module.exports = Insurance;
