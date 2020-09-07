import { FarmerPolicyModel } from './../../models/farmer-policy.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-claim',
  templateUrl: './file-claim.component.html',
  styleUrls: ['./file-claim.component.css']
})
export class FileClaimComponent implements OnInit {

  url = 'https://read.cognitiveservices.azure.com/vision/v2.0/recognizeText?mode=Printed';
  image;
  policy: FarmerPolicyModel = new FarmerPolicyModel();

  showDetails = false;
  imageUpl = true;

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/octet-stream',
      'Ocp-Apim-Subscription-Key':'eb0be74d7137417485313ce97266165b',
      'observe': "response"
    })
  };




  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  selectFile(e){
    this.image = e;
    console.log(this.image);
    this.imageUpl = false;

  }


  onSubmit() {




    // this.http.post(this.url,this.policy,this.httpOptions).subscribe(
    //   (resp) => {
    //     // console.log(resp.headers.get('Operation-Location'))
    //   },
    //   (err) => {
    //     console.log(err)
    //   }
    // )

    // now we have the details extracted from the policy
    this.policy.farm = ['123', '1233'];
    this.policy.issuedOn = new Date('09-09-2019');
    this.policy.validThru = new Date('08-09-2020');
    this.policy.fullName = 'Ramakant Shukla';
    this.policy.policyNumber = '8796karincrp-rain-drt';
    this.policy.amount = 10000;
    this.showDetails = true;

  }

  fileClaim() {
    console.log('call api with policy object')
  }

}
