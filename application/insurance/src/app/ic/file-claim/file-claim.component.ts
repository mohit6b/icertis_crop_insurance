import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-file-claim',
  templateUrl: './file-claim.component.html',
  styleUrls: ['./file-claim.component.css']
})
export class FileClaimComponent implements OnInit {

  url = 'https://read.cognitiveservices.azure.com/vision/v2.0/recognizeText?mode=Printed';
  policy;

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
    this.policy = e;
    console.log(this.policy)
    
  }

  
  onSubmit(){
    let reader = new FileReader()
    console.log(this.policy)
    this.http.post(this.url,this.policy,this.httpOptions).subscribe(
      (resp) => {
        // console.log(resp.headers.get('Operation-Location'))
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
