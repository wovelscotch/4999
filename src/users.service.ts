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
  isExisting = false;
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

  getLoginByName(user: string, site): Observable<Login> {
    return this.http.get<Item>(`${this.url}site${site}/?username=${user}`).pipe(
      map(item => {
        var login = new Login;
        login.username = item.Item.username;
        login.password = item.Item.password;
        return login;
      }
      ));
  }

  createUser(user: User) {
    return this.http.post(`${this.url}users/?username=${user.username}&type=${user.type}`, {}).subscribe();
  }
  createLogin(user: Login, site) {
    return this.http.post(`${this.url}site${site}/?username=${user.username}&password=${user.password}`, {}).subscribe();
  }

  createlog(name: string, cond: string) {
    return this.http.post(`${this.url}log/?username=${name}&cond=${cond}`, {}).subscribe();
  }

  save(username: string) {
    this.savename = username;
  }
  load(): string {
    return this.savename;
  }
  setIsExisting(inp: boolean) {
    this.isExisting = inp;
  }
  getIsExisting(): boolean {
    return this.isExisting;
  }

  hash(inp: string): string {
    var h = 5381;
    var i = inp.length;
    while (i) {
      h = (h * 33) ^ inp.charCodeAt(--i);
    }
    return (h >>> 0).toString();
  }
}
