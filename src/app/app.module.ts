import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImageSearchModule } from './image-search/image-search.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    ImageSearchModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
