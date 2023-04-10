import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-reusable',
  templateUrl: './child-reusable.component.html',
  styleUrls: ['./child-reusable.component.css']
})
export class ChildReusableComponent implements OnInit {
  constructor() {}

  @Input() item2:{name:string, email:string}={name:"",email:""};
  
  ngOnInit(): void {
    
  }
}
