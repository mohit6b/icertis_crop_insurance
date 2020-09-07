import { Injectable } from '@angular/core';
import { Web3Service } from './web3.service';

@Injectable({
  providedIn: 'root'
})
export class TempService {

  constructor(private web3:Web3Service) { }

  getData(){
    
    console.log('service')
  }
}
