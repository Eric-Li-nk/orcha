import { Component } from '@angular/core';
import { User } from './_models/user';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../css/style.css']
})
export class AppComponent {
  title = 'Orcha Editor';
  LoggedIn: User;

  constructor(private UserService: UserService) {
    this.UserService.user.subscribe( x => this.LoggedIn = x);
  }
}
