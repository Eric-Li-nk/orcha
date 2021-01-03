import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { exit } from 'process';
import { UserService } from './user.service'

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor(private UserService: UserService) { 
    this.UserService.getUsernames().subscribe(UserList => {this.UsernameList = UserList});
    this.UserService.getEmails().subscribe(EmailList => {this.EmailList = EmailList});
  }

  UsernameList: string[];
  EmailList: string[];
  
  usernameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUsername(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateUsername(username: string){
    this.UserService.getUsernames().subscribe(UserList => {this.UsernameList = UserList});
    return (this.UsernameList.indexOf(username) > -1);
  }

  emailValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateEmail(userControl.value)) {
          resolve({ emailNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateEmail(email: string){
    this.UserService.getEmails().subscribe(EmailList => {this.EmailList = EmailList});
    return (this.EmailList.indexOf(email) > -1);
  }
}
