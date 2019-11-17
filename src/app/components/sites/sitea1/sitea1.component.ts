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

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }

  submit(user: Login) {
    this.userService.createLogin(user, 'a');
    this.router.navigateByUrl(`/site-b1`);
  }
}
