import { Component, OnInit } from '@angular/core';
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private UserService: UserService,
    private router: Router) { 
      if (this.UserService.userValue) {
        this.router.navigateByUrl("/");
      }
     }

  submitted = false;
  LoginNotValid = false;
  validAuthentification = false
  User = new User("","",-1);

  onSubmit() {
    this.submitted = true;
    this.UserService.login(this.User.username, this.User.password)
        .subscribe({
          next: () => {
            this.validAuthentification = true
            this.LoginNotValid = false;
            setTimeout(() => {
              this.router.navigateByUrl("/editor");
            }, 3000)
          },
          error: err => {
            this.submitted = false;
            this.LoginNotValid = true;
            console.error(err);
          }
    });
    
  }

  Users: User[];
  error='';
  success='';

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.UserService.getAll().subscribe(
      (res: User[]) => {
        this.Users = res;
      },
      (err) => {
        this.error = err;
      }
    )
  }

}
