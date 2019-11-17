import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/users.service';
import { Login } from 'src/app/models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-siteb2',
  templateUrl: './siteb2.component.html',
  styleUrls: ['./siteb2.component.css']
})
export class Siteb2Component implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  submit(user: Login) {
    this.userService.createLogin(user, 'b');
    this.router.navigateByUrl(`/site-c2`);
  }
}
