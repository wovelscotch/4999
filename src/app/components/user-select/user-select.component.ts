import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/users.service';
import { User, Item } from 'src/app/models/user.model';

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
    console.log("ehllo")
  }

  onSubmit() {
    if (this.firstname != this.secondname)
      this.isMatch = false;
    else {
      //finalize username
      var newUser = new User;
      newUser.username = this.firstname;
      newUser.type = Math.floor(Math.random() * Math.floor(2)) + 1;
      //check user does not exist
      if (this.doesUserExist(newUser))
        console.log("nope");
      else
        console.log("yep");
      //send to DB

      //export?
      this.router.navigateByUrl('/site-a');
    }
  }
  doesUserExist(user: User): boolean {
    var tempuser = this.getUser(user);
    if (tempuser != null)
      return true;
    else
      return false;
  }
  getUser(user: User) {
    var tempuser: Item;
    return this.userService.getUserByName(user.username).subscribe(user => { tempuser = user });
  }
  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

