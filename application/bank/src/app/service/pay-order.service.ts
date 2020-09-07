import { Injectable } from '@angular/core';
import { PayOrder } from '../models/pay-order.model';

@Injectable({
  providedIn: 'root'
})
export class PayOrderService {

  payorders: PayOrder = new PayOrder()
  constructor() { }

  getPayOrderDetails(){
    return this.payorders;

  }

  searchPayOrder(){
    return this.payorders;
  }

  
}
