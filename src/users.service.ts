import { Injectable, Output } from '@angular/core';
import { User, Item } from './app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";
import { EventEmitter } from 'events';
import { Login } from './app/models/login.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "https://m7to704tc3.execute-api.us-east-2.amazonaws.com/prod/";

  @Output() found = new EventEmitter();

  constructor(
    private http: HttpClient
  ) { }

  getUserByName(username: String) {
    this.http.get<Item>(`users/${this.url}users/?username=${username}`).subscribe(data => {
      return data.Item;
    })
  }
  createUser(user: User) {
    return this.http.post(`${this.url}users/?username=${user.username}&type=${user.type}`, {}).subscribe();
  }
  createLogin(user: Login, site) {
    return this.http.post(`${this.url}site${site}/?username=${user.username}&password=${user.password}`, {}).subscribe();
  }
}
