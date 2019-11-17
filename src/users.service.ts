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
  savename: string;
  @Output() found = new EventEmitter();


  constructor(
    private http: HttpClient
  ) { }

  getUserByName(username: String): Observable<User> {
    return this.http.get<Item>(`${this.url}users/?username=${username}`).pipe(
      map(item => {
        var user = new User;
        if (!item.Item) {
          return null;
        }
        user.username = item.Item.username;
        user.type = item.Item.type;
        return user;
      }));
  }

  createUser(user: User) {
    return this.http.post(`${this.url}users/?username=${user.username}&type=${user.type}`, {}).subscribe();
  }
  createLogin(user: Login, site) {
    return this.http.post(`${this.url}site${site}/?username=${user.username}&password=${user.password}`, {}).subscribe();
  }
  save(username: string) {
    this.savename = username;
  }
  load(): string {
    return this.savename;
  }
}
