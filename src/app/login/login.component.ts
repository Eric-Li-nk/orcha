import { Component, OnInit } from '@angular/core';
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private UserService: UserService) { }

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
