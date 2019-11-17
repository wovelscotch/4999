import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/users.service';
import { User, Item } from 'src/app/models/user.model';
import { tap } from "rxjs/operators";
@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {

  firstname: string;
  secondname: string;
  isMatch: boolean = true;
  constructor(private router: Router, private userService: UsersService) { }

  ngOnInit() {
  }

  onSubmit() {
    //finalize username
    var newUser = new User;
    newUser.username = this.firstname;
    newUser.type = Math.floor(Math.random() * Math.round(2)) + 1;
    for (let i = 0; i < 10; i++) {
      console.log(Math.round(Math.random()) + 1);
    }
    console.log(newUser.type);
    //check user does not exist

    //send to DB
    this.userService.createUser(newUser);
    //export?
    this.router.navigateByUrl(`/site-a${newUser.type}`);

  }
}

