import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OracleService {

  constructor() { }

  getAvailableOracleService(){
    // list of oracle services 

  }

  getOracleResult(){
    // not for front endianness

    // using oracle id return prediction
    // 0 - no return
    // 1 - for partial return
    // 2 - for full return
  }
}
