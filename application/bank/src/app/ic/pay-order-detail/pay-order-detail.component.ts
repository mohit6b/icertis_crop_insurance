import { Component, OnInit, Input } from '@angular/core';
import { PayOrder } from 'src/app/models/pay-order.model';

@Component({
  selector: 'app-pay-order-detail',
  templateUrl: './pay-order-detail.component.html',
  styleUrls: ['./pay-order-detail.component.css']
})
export class PayOrderDetailComponent implements OnInit {

  @Input()payOrder: PayOrder;
  constructor() { }

  ngOnInit() {
  }

}
