import { Component } from '@angular/core';

import { ExampleService } from './shared/services/example.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private exampleService: ExampleService){
  this.data = this.exampleService.exampleLog();
}

  title = 'app';
  data: string;

  do(){
    console.log("Kek");
  }
}
