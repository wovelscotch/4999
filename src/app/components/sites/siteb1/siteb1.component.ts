import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login.model';
import { UsersService } from 'src/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siteb1',
  templateUrl: './siteb1.component.html',
  styleUrls: ['./siteb1.component.css']
})
export class Siteb1Component implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  submit(user: Login) {
    if (!this.userService.getIsExisting()) {
      this.userService.createLogin(user, 'b');
    }
    this.router.navigateByUrl(`/site-c1`);
  }
}
