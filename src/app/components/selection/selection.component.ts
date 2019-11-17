import { Component, OnInit, NgModule, EventEmitter, Output } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { UsersService } from 'src/users.service';

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

  location: string = "assets/pictures/";
  endtag: string = ".jpg";
  images: string[] = [];
  NUM: number = 25;
  selectedIndex: number;
  imageSelection: any[];
  finalSelection: any[];
  user = new Login;
  username: string;
  password: string = "";
  noPicture: boolean = false;
  noUser: boolean = false;

  @Output() submission = new EventEmitter;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.username = this.userService.load();
    for (let i = 0; i < this.NUM; i++) {
      let newRef = this.location + i + this.endtag;
      this.images.push(newRef);
      this.shuffle(this.images);
    }
    this.imageSelection = [];
    this.finalSelection = [];
  }
  onImageClick(i: number) {
    this.noPicture = false;
    this.selectedIndex = i;
    var match = this.images[i].match(/(\d+)/);
    this.imageSelection.push(match[0]);
    this.shuffle(this.images);
  }
  shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  onSubmitClick() {
    if (this.imageSelection.length < 1) {
      this.noPicture = true;
    } else if (!this.username) {
      this.noUser = true;
    } else {
      this.noUser = false;
      this.finalSelection = this.imageSelection;
      this.imageSelection = [];
      this.user.username = this.username;
      this.user.password = this.finalSelection.toString();
      this.submission.emit(this.user);
    }
  }
  onClearClick() {
    this.imageSelection = [];
  }
}
