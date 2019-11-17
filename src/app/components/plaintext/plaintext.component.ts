import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { UsersService } from 'src/users.service';

@Component({
  selector: 'app-plaintext',
  templateUrl: './plaintext.component.html',
  styleUrls: ['./plaintext.component.css']
})
export class PlaintextComponent implements OnInit {

  username: string;
  password: string;
  user = new Login;
  constructor(private service: UsersService) { }

  @Output() submission = new EventEmitter;

  ngOnInit() {
    this.username = this.service.load();
  }
  onSubmit() {
    this.user.username = this.username;
    this.user.password = this.password;
    this.submission.emit(this.user);
  }
}
