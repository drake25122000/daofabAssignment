import { ParentService } from './../../services/parentService/parent.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  //To initiate the parent transactions list
  parents :any = [];

  //To initiate the displayed parent transacctions list
  displayParents :any = [];
  
  //Pointer to the element
  start = 0;

  //To move to the next page
  next() {
    this.start = this.start + 2;
    this.displayParents = this.parents.slice(this.start, this.start + 2);
  }

  //Go back to the previous page
  previous() {
    this.start = this.start - 2;
    this.displayParents = this.parents.slice(this.start, this.start + 2);
  }

  //To initae the parent component
  constructor(
    public pService : ParentService) { }

  //To start some function at the begining of the parent component  
  ngOnInit(): void {
    this.getParent();
    console.log(this.parents);
    //this.displayParents = this.parents.slice(this.start, this.start + 2);
  }

  //To get the parent transaction list from api
  getParent(): void {
    this.pService.getParentPaidAmount().subscribe(
      data => {
        this.parents = data;
        this.displayParents = this.parents.slice(this.start, this.start + 2);
      },
      err => {
        console.log(err);
      }
    )
  }
  

}
