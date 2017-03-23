import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'image-search-header',
  template: `
     <header class='header'>
      <h1>{{ title }}</h1>
      <div class="searchTerm">
      <input class='searchTermInput'
            aria-label="Search"
             #input             
             (keydown.enter)='saveTerm(input.value)'             
             type='input'
             [placeholder]='placeHolder'
             autofocus>            

      <span class='searchBtn' 
            aria-label='Search' 
            (click)='saveTerm(input.value)' >
            <i class="w3-xxxlarge glyphicon glyphicon-search"></i>
      </span>
      </div>
  `,
  styleUrls: ['image-search-header.component.scss']
})
export class ImageSearchHeaderComponent {

  @Output()
  private searchTermInput: EventEmitter<string>;
  private title: string;
  private placeHolder: string;

  constructor() {
     this.searchTermInput = new EventEmitter<string>();
     this.title = "Image Search Engine";
     this.placeHolder = "Your Search Term"
   }

  private saveTerm(value) {
    this.searchTermInput.emit(value);
  }

}
