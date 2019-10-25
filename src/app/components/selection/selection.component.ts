import { Component, OnInit, NgModule } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  constructor() {
  }
  location: string = "assets/pictures/";
  endtag: string = ".jpg";
  images: string[] = [];
  NUM: number = 25;
  selectedIndex: number;
  ngOnInit() {
    for (let i = 0; i < this.NUM; i++) {
      let newRef = this.location + i + this.endtag;
      this.images.push(newRef);
    }
  }
  onImageClick(i: number) {
    this.selectedIndex = i;

  }
  onSubmitClick() {

  }
  onClearClick() {

  }
}
