import { Component, OnInit, NgModule, EventEmitter, Output, Input } from '@angular/core';
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
  password2: string;

  noPicture: boolean = false;
  noUser: boolean = false;
  failed: boolean = false;
  again: boolean = false;
  noMatch: boolean = false;
  counter: number = 0;

  @Input() site: string;
  @Output() submission = new EventEmitter;

  constructor(private userService: UsersService) {
  }

  ngOnInit() {
    this.username = this.userService.load();
    if (this.userService.getIsExisting()) {
      this.userService.getLoginByName(this.username, this.site).subscribe(u => this.user = u);
    }
    for (let i = 0; i < this.NUM; i++) {
      let newRef = this.location + i + this.endtag;
      this.images.push(newRef);
      this.shuffle(this.images);
    }
    this.imageSelection = [];
    this.finalSelection = [];
  }
  onImageClick(i: number) {
    this.clearBool();
    this.noPicture = false;
    this.selectedIndex = i;
    var match = this.images[i].match(/(\d+)/);
    this.imageSelection.push(match[0]);
    if (this.imageSelection.length == 1)
      this.password = this.imageSelection[0].toString();
    else
      this.password += this.imageSelection[this.imageSelection.length - 1].toString();
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
    this.failed = false;
    if (this.userService.getIsExisting()) {
      if (this.userService.hash(this.password) != this.user.password) {
        this.failed = true;
        this.counter++;
        this.userService.createlog(this.username, `Failed ${this.site}`);
        if (this.counter >= 3)
          this.submission.emit(this.user);
        this.onClearClick();
      } else {
        this.failed = false;
        this.userService.createlog(this.username, `Success ${this.site}`);
        this.submission.emit(this.user);
      }
    } else {
      if (this.imageSelection.length < 3) {
        this.noPicture = true;
      } else if (!this.username) {
        this.noUser = true;
      } else {
        if (this.again) {
          this.noUser = false;
          this.finalSelection = this.imageSelection;
          this.imageSelection = [];
          this.user.username = this.username;
          this.user.password = this.finalSelection[0].toString();
          for (let i = 1; i < this.finalSelection.length; i++) {
            this.user.password += this.finalSelection[i].toString();
          }
          if (this.password2 != this.user.password) {
            this.noMatch = true;
            this.again = false;
            this.password = "";
            this.password2 = "";
            this.user.password = "";
            this.imageSelection = [];
            this.finalSelection = [];
          } else {
            this.userService.createlog(this.username, `Set Password ${this.site}`);
            this.submission.emit(this.user);
          }
        } else {
          this.again = true;
          this.password2 = this.imageSelection[0].toString();
          for (let i = 1; i < this.imageSelection.length; i++) {
            this.password2 += this.imageSelection[i].toString();
          }
          this.imageSelection = [];
        }
      }
    }
  }
  onClearClick() {
    this.clearBool();
    this.imageSelection = [];
  }
  clearBool() {
    this.noPicture = false;
    this.noUser = false;
    this.failed = false;
    this.noMatch = false;
  }
}
