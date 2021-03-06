import { Component, OnInit } from '@angular/core';
import { PolicyModel } from 'src/app/models/policy.model';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.css']
})
export class PolicyListComponent implements OnInit {

  displayedColumns: string[] = ['policyName', 'tenure', 'amount', 'premium', 'oracleId'];
  ELEMENT_DATA: PolicyModel[] = [];
  dataSource = [];

  constructor() { }

  ngOnInit() {
  this.ELEMENT_DATA= [
      new PolicyModel(),
      new PolicyModel(),
    ];

    this.ELEMENT_DATA[0].init();
    

    
    this.dataSource = this.ELEMENT_DATA;
  }

  

}
