import { Injectable } from '@angular/core';
import { User, UserJson, Item } from './app/models/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "https://m7to704tc3.execute-api.us-east-2.amazonaws.com/prod/users/";
  constructor(
    private http: HttpClient
  ) { }

  getUserByName(username: String) {
    return this.http.get<Item>(`${this.url}?username=${username}`).pipe(
      tap(_ => console.log(_.Item.username)),
      map(resp => {
        if (resp)
          return resp;
        else
          console.log("fuckin wait");
      })
    );
  }
}
