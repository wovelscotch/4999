import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { UsersService } from 'src/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitea1',
  templateUrl: './sitea1.component.html',
  styleUrls: ['./sitea1.component.css']
})
export class Sitea1Component implements OnInit {

  login: Login;
  constructor(private userService: UsersService, private router: Router) { }
  sent = false;
  notFound = false;

  ngOnInit() {
  }

  submit(user: Login) {
    if (!this.userService.getIsExisting()) {
      this.userService.createLogin(user, 'a');
    }
    this.router.navigateByUrl(`/site-b1`);
  }
  onClick() {
    this.router.navigateByUrl(`/site-b1`);
  }
  onReset() {
    this.sent = false;

  }
}
