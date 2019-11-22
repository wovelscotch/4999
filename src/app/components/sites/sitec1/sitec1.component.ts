import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/users.service';
import { Login } from 'src/app/models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitec1',
  templateUrl: './sitec1.component.html',
  styleUrls: ['./sitec1.component.css']
})
export class Sitec1Component implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  submit(user: Login) {
    if (!this.userService.getIsExisting()) {
      this.userService.createLogin(user, 'c');
    }
    this.router.navigateByUrl(`/finished`);
  }
}
