import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRouting } from './app.routing';

@NgModule({
  imports:      
  [ 
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    AppRouting 
  ],
  declarations: [ 
    AppComponent, 
    HomeComponent
  ],
  providers:    [ ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }