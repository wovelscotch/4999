import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/users.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-existing',
  templateUrl: './user-existing.component.html',
  styleUrls: ['./user-existing.component.css']
})
export class UserExistingComponent implements OnInit {
  username: string;
  username$: Observable<User>;
  user: User;
  sent: boolean = false;
  dne = false;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    this.user = null;
    this.sent = true;
    this.userService.getUserByName(this.username).subscribe(user => this.user = user);

  }
  onClick() {
    this.sent = false;
    this.userService.save(this.username);
    this.userService.setIsExisting(true);
    this.router.navigateByUrl(`/site-a${this.user.type}`);
  }
}
