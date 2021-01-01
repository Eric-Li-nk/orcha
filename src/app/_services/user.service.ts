import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { User } from "../_models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost/api';
                  
  getAll() {
    return this.http.get<User[]>(`${this.baseUrl}/list`);
  }

  getUsernames() {
    return this.http.get<string[]>(`${this.baseUrl}/usernames`);
  }
  getEmails() {
    return this.http.get<string[]>(`${this.baseUrl}/emails`);
  }

  store(user: User) {
    return this.http.post(`${this.baseUrl}/store`, { data: user });
  }


}