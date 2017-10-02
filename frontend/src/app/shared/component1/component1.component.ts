import { Component, OnInit } from '@angular/core';

import {ExampleService} from './../services/example.service';


@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  data: string;

  constructor(private exampleService: ExampleService) { }
  ngOnInit() {
    this.data = this.exampleService.exampleLog();
  }
}
