import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-data-transfer',
  templateUrl: './child-data-transfer.component.html',
  styleUrls: ['./child-data-transfer.component.css']
})
export class ChildDataTransferComponent implements OnInit {

  constructor() {}

  @Output() updatedataEvent = new EventEmitter<string>();

  ngOnInit(): void {
    
  }
}
