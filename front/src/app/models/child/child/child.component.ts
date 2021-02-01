import { ChildService } from './../../../services/childService/child.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  //To initiate the list
  childSenderReceiver :any = [];

  //To initiate the parameter
  param : string = "";

  constructor(
    public cService : ChildService,
    public route : ActivatedRoute) {
      this.route.params.subscribe( params => {
        this.param = params.parentid;
      });
     }

  ngOnInit(): void {
    this.getChildren(this.param);
  }

  //Function to get list of child transactions
  getChildren(id: string): void {
    this.cService.getChildSenderReceiver(id).subscribe(
      data => {
        console.log(data);
        this.childSenderReceiver = data;
      },
      err => {
        console.log(err);
      }
    )
  }

}
