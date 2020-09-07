import { Component, OnInit } from '@angular/core';
import { TempService } from '../service/temp.service';

@Component({
  selector: 'app-tmp',
  templateUrl: './tmp.component.html',
  styleUrls: ['./tmp.component.css']
})
export class TmpComponent implements OnInit {

  constructor(private tmp:TempService) { }

  ngOnInit() {
    this.tmp.getData()
  }

}
