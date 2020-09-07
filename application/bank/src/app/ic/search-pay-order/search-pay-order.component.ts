import { Component, OnInit } from '@angular/core';
import { PayOrder } from 'src/app/models/pay-order.model';

@Component({
  selector: 'app-search-pay-order',
  templateUrl: './search-pay-order.component.html',
  styleUrls: ['./search-pay-order.component.css']
})
export class SearchPayOrderComponent implements OnInit {

  isSearched = false;

  payorder: PayOrder = new PayOrder();
  progress = false;

  constructor() { }

  ngOnInit() {
  }

  search(){
    this.isSearched = false;
    this.progress = true;
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
