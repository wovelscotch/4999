import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';

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
  imageSelection: number[];
  finalSelection: number[];

  @Output() submission = new EventEmitter;

  ngOnInit() {
    for (let i = 0; i < this.NUM; i++) {
      let newRef = this.location + i + this.endtag;
      this.images.push(newRef);
    }
    this.imageSelection = [];
    this.finalSelection = [];
  }
  onImageClick(i: number) {
    this.selectedIndex = i;
    this.imageSelection.push(i);
    console.log(this.imageSelection);

  }
  onSubmitClick() {
    if (this.imageSelection.length < 1) {
      //error, needs at least one picture
      console.log("error, needs to be at least one picture");
    }
    this.finalSelection = this.imageSelection;
    this.imageSelection = [];
    this.submission.emit(this.finalSelection);
  }
  onClearClick() {
    this.imageSelection = [];
  }
}
