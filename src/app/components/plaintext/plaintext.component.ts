import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  user: Login;
  failed: boolean = false;
  notLong: boolean = false;
  @Input() site: string;
  counter: number = 0;
  constructor(private service: UsersService) { }

  @Output() submission = new EventEmitter;

  ngOnInit() {
    this.username = this.service.load();
    if (this.service.getIsExisting()) {
      this.service.getLoginByName(this.username, this.site).subscribe(u => this.user = u);
    }
  }
  onSubmit() {
    this.failed = false;
    if (this.service.getIsExisting()) {
      if (this.service.hash(this.password) != this.user.password) {
        this.failed = true;
        this.counter++;
        this.service.createlog(this.username, `Failed ${this.site}`);
        if (this.counter >= 3)
          this.submission.emit(this.user);
        return;
      }
      else {
        this.failed = false;
        this.service.createlog(this.username, `Success ${this.site}`);
        this.user.username = this.username;
        this.user.password = this.password;
        this.submission.emit(this.user);
        return;
      }
    } else {
      if (this.password.length < 8) {
        this.notLong = true;
      } else {
        this.user = new Login;
        this.user.username = this.username;
        this.user.password = this.password;
        this.service.createlog(this.username, `Set Password ${this.site}`);
        this.submission.emit(this.user);
      }
    }
  }
}
