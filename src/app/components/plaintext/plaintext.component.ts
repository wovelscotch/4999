import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from 'src/app/models/login.model';

@Component({
  selector: 'app-plaintext',
  templateUrl: './plaintext.component.html',
  styleUrls: ['./plaintext.component.css']
})
export class PlaintextComponent implements OnInit {

  username: string;
  password: string;
  user = new Login;
  constructor() { }

  @Output() submission = new EventEmitter;

  ngOnInit() {
  }
  onSubmit() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.submission.emit(this.user);
  }

  hash(str: string) {
    var hash = 5381;
    var i = str.length;
    while (i) {
      hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
  }

}
