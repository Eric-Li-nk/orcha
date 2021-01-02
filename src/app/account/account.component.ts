import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private UserService: UserService) { }

  LoggedUser: User;
  keys: any;
  ProjectsTable: Project[];

  ngOnInit(): void {
      this.LoggedUser = JSON.parse(localStorage.getItem("user")) as User;
      this.keys = Object.keys(this.LoggedUser);
      this.UserService.getProjectsTable(this.LoggedUser.id)
      .subscribe({
        next: ProjectList => {
          this.ProjectsTable = ProjectList as Project[];
      },
      error: err => {
        console.error(err);
      }
    });
  }

  logout() {
      this.UserService.logout();
  }
}
