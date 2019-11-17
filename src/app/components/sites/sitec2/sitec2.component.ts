import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/users.service';
import { Login } from 'src/app/models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitec2',
  templateUrl: './sitec2.component.html',
  styleUrls: ['./sitec2.component.css']
})
export class Sitec2Component implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  submit(user: Login) {
    this.userService.createLogin(user, 'c');
    this.router.navigateByUrl(`/finished`);
  }

}
