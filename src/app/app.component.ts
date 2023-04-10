import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'parent_child';

  data=10;

  update() {
    this.data=Math.floor(Math.random()*10);
  }

  userdata = [
    {name:'nutan',email:'nutan@gmail.com'},
    {name:'vidya',email:'vidya@gmail.com'},
    {name:'kavya',email:'kavya@gmail.com'}
  ];

  

  updatedata(item:string) {
    console.log(item);
  }
}
