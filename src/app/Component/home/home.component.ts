import {
  Component, OnInit, OnDestroy,
  TemplateRef,
  ContentChild,
  ViewChild,
  ContentChildren,
  QueryList,
  AfterContentInit
} from '@angular/core';

import { ExpTemplateDirective } from '../shared/shareModule';

@Component({
  selector: 'spinit-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterContentInit {

  // @ContentChild(ExpTemplateDirective) templateRef: ExpTemplateDirective;
  checked = false;

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
  ngAfterContentInit(): void {
    // console.log(this.templateRef);
  }
}


// test commit