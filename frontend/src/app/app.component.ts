import { Component } from '@angular/core';

import { ExampleService } from './shared/services/example.service';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private exampleService: ExampleService){
}

  title = 'HannTrackerks';

  do(){
    console.log("Kek");
  }
}
