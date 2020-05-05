import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
  username = 'ianic1999';
  clicked = false;
  show = false;
  numbers = [];
  index = 0;

  constructor() {
    this.username = Math.random() > 0.5 ? 'ianic1999' : 'ianec1999';
  }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.username = '';
    this.clicked = true;
  }

  getColor() {
    return this.username === 'ianic1999' ? 'green' : 'red';
  }

  onDisplay(){
    this.show = true;
    this.numbers.push(this.index);
    this.index += 1;
  }
}
