import { ParentService } from './../../services/parentService/parent.service';
import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  parents :any = [];

  displayParents :any = [];
  
  start = 0;

  next() {
    this.start = this.start + 2;
    this.displayParents = this.parents.slice(this.start, this.start + 2);
  }

  previous() {
    this.start = this.start - 2;
    this.displayParents = this.parents.slice(this.start, this.start + 2);
  }


  constructor(
    public pService : ParentService) { }

  ngOnInit(): void {
    this.getParent();
    console.log(this.parents);
    //this.displayParents = this.parents.slice(this.start, this.start + 2);
  }

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
