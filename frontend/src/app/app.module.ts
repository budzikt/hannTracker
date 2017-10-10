//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//App modules
import {SharedModule} from './shared/shared.module';

//App components
import { AppComponent } from './app.component';
import { ButtonBsic} from './../button-basic/button.basic';


@NgModule({
  declarations: [
    AppComponent,
    ButtonBsic
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],

  exports: [ButtonBsic],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
