import { Component, OnInit } from '@angular/core';
import { PayOrder } from 'src/app/models/pay-order.model';

@Component({
  selector: 'app-pay-order-status',
  templateUrl: './pay-order-status.component.html',
  styleUrls: ['./pay-order-status.component.css']
})
export class PayOrderStatusComponent implements OnInit {

  isSearched = false;

  payorder: PayOrder = new PayOrder();
  progress = false;
  
  constructor() { }

  ngOnInit() {
  }

  search(){
    this.isSearched = false;
    this.progress = true;
    this.getPayorderByid();
    this.progress = false;
    this.isSearched = true;
  }

  getPayorderByid(){
    this.payorder.amount = 1000
    this.payorder.expiry = new Date();
    this.payorder.issuedDate = new Date();
    this.payorder.issuedTo = '123';
    this.payorder.issueingBank = 'gringots bank'
    this.payorder.issuer = 'ABC insurance'
    this.payorder.recieverName = 'ramakant shukla'
    this.payorder.status = 'issued'

  }
}
