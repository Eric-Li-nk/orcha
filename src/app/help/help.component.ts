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

    this.repliste.push("Reponse question 1");
    this.repliste.push("Reponse question 2");
    this.repliste.push("Reponse question 3");
    this.repliste.push("Reponse question 4");
    this.repliste.push("Reponse question 5")



  }

  ngOnInit(): void {
  }

}