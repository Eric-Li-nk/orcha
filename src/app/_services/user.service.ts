import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { Router } from '@angular/router';
import { User } from "../_models/user";
import { Project } from '../_models/project';
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

  register(user: User) {
    return this.http.post(`${this.baseUrl}/register`, { data: user });
  }

  createProject(id, projectName, content) {
    return this.http.post<Project>(`${this.baseUrl}/createProject`, { id, projectName, content } )
      .pipe(map( res => {
        return new Project(projectName, content);
      }));
  }

  updateProject(id, projectName, content) {
    return this.http.put<Project>(`${this.baseUrl}/updateProject`, { id, projectName, content } )
      .pipe(map( res => {
        return new Project(projectName, content);
      }));
  }

  deleteProject(id, projectName) {
    return this.http.post(`${this.baseUrl}/deleteProject`, { id, projectName} )
  }

  getProjectsTable(id) {
    return this.http.post<Project[]>(`${this.baseUrl}/projectsTable`, { id })
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

}