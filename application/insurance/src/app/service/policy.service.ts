import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor() { }

  getPolicyList(){
    //return list of policy
    // active / inactive 
  }

  changePolicyStatus(){
    // activate or inactivate policy
  }

  createPolicy(){
    // create new policy
  }

  claimStatus(){
    // unique policy id status as enum 
  }
}
