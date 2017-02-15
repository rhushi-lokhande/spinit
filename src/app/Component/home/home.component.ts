import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spinit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  list = [{
    type: 'a',
    text: 'xx1'
  }, {
    type: 'a',
    text: 'xx2'
  }, {
    type: 'b',
    text: 'xx3'
  }, {
    type: 'a',
    text: 'xx4'
  }, {
    type: 'b',
    text: 'xx5'
  }

  ];
  constructor() { }

  ngOnInit() {
  }
  public yourNotificationFunction() {
    console.log('object');
  }
}
