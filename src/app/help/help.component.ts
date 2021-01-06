import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  qliste:Array<string> = [];
  repliste:Array<string> = [];

  constructor() { 

    /*Questions*/

    this.qliste.push("How to create an account ?");
    this.qliste.push("How do I save my files ?");
    this.qliste.push("What are the meaning of the symbole in the tool bar ?");
    this.qliste.push("How to access to my files");
    this.qliste.push("I lost my password");

    /*Réponses */

   this.repliste.push("To create click on login and sign up");
    this.repliste.push("To save your files click on saves logo");
    this.repliste.push("All the information for the tool bar is on the home page");
    this.repliste.push("To access your files click on files logo");
    this.repliste.push("To recover your password click on login and password");



  }

  ngOnInit(): void {
  }

}