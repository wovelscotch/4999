import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/users.service';
import { Login } from 'src/app/models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sitea2',
  templateUrl: './sitea2.component.html',
  styleUrls: ['./sitea2.component.css']
})
export class Sitea2Component implements OnInit {

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  submit(user: Login) {
    this.userService.createLogin(user, 'a');
    this.router.navigateByUrl(`/site-b2`);
  }

}
