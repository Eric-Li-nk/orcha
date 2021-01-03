import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { User } from "../_models/user";
import { UserService } from "../_services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  
  submitted = false;
  constructor(private UserService: UserService) { }
  User = new User('','',-1,'');
  passwordconfirm = "";

  addUser(form) {
    this.UserService.register(this.User).subscribe();
    this.submitted = true;
    form.reset();
  }
}
