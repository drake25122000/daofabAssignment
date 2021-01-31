import { logging } from 'protractor';
import { ParentService } from './../../services/parentService/parent.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parents :any = [];
  
  constructor(
    public pService : ParentService) { }

  ngOnInit(): void {
    this.getParent();
    let color: string = "blue";
  }

  getParent(): void {
    this.pService.getHeader().subscribe(
      data => {
        console.log(data);
        this.parents = data;
      },
      err => {
        console.log(err);
      }
    )
  }
  

}
