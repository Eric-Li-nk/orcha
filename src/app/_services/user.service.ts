import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { Router } from '@angular/router';
import { User } from "../_models/user";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
      private http: HttpClient,
      private router: Router
      ) { 
      this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem("user")));
      this.user = this.userSubject.asObservable();
   }

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  public get userValue(): User {
    return this.userSubject.value;
  }

  baseUrl = 'http://localhost/api';
  
  login(username, password) {
    return this.http.post<User>(`${this.baseUrl}/login`, { username, password })
        .pipe(map(user => {
            localStorage.setItem("user",JSON.stringify(user));
            this.userSubject.next(user);
        }))
  }

  logout() {
    localStorage.removeItem("user");
    this.userSubject.next(null);
    this.router.navigateByUrl('/login');
  }

  getAll() {
    return this.http.get<User[]>(`${this.baseUrl}/list`);
  }

  getUsernames() {
    return this.http.get<string[]>(`${this.baseUrl}/usernames`);
  }
  getEmails() {
    return this.http.get<string[]>(`${this.baseUrl}/emails`);
  }

  register(user: User) {
    return this.http.post(`${this.baseUrl}/register`, { data: user });
  }


}