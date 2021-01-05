import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';
import { saveAs } from 'file-saver';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
}) export class EditorComponent implements OnInit {
    public Editor = ClassicEditor;
    public Data = "Write your code here";
    regex = /^((&nbsp;)|(authors)|(compute)|(description)|(title)|(domain)|(receive)|(send)|(title)|(version))/g;
    public fileName = "Project default name";
    public ProjectList: Project[];
    public LoggedUser = JSON.parse(localStorage.getItem("user")) as User;
    public id = this.LoggedUser.id;
    resultat = "You can start coding in Orcha !";
    constructor(private UserService: UserService) {

    }

    ngOnInit() {

        this.UserService.getProjectsTable(this.id)
            .subscribe({
                next: ProjectsTable => {
                    this.ProjectList = ProjectsTable as Project[];
                },
                error: err => {
                    console.error(err);
                }
            })
    }

    public compile() {
        var ligne = this.Data.split("<p>"&&"<br>");
        var i = 1;
        var verif = true;
        while (i < ligne.length && verif) {
            verif = this.regex.test(ligne[i]);
            i++;
        }
        if (verif) {
            this.resultat = "No problem";
        }
        else {
            this.resultat = ("Error at line " + (i-1));
        }
    }


    public onSave() {
        if (this.ProjectList.some(p => p.projectName == this.fileName)) {
            this.UserService.updateProject(this.id, this.fileName, this.Data) // Si le projet existe dans la liste des projet, on va update le projet.
                .subscribe({
                    next: Project => {
                        for (var i in this.ProjectList) {
                            if (this.ProjectList[i].projectName == Project.projectName) { this.ProjectList[i].content = Project.content }
                        }
                    },
                    error: err => {
                        console.error(err);
                    }
                });
        } else {
            this.UserService.createProject(this.id, this.fileName, this.Data) // Sinon (Le projet est nouveau) on va créer le projet.
                .subscribe({
                    next: Project => {
                        this.ProjectList.push(Project);
                    },
                    error: err => {
                        console.error(err);
                    }
                });
        }
    }

    public onLoad() {
        for (var i in this.ProjectList) {
            if (this.ProjectList[i].projectName == this.fileName) { this.Data = this.ProjectList[i].content }
        }
    }

    public export() {
        let data = new Blob([this.Data], { type: 'text/plain' });
        saveAs(data, this.fileName + ".txt");
    }

    public import(fileList: FileList) {
        let file = fileList[0];
        let fileReader = new FileReader();
        let self = this;
        fileReader.onloadend = function (x) {
            self.Data = fileReader.result as string;
        }
        fileReader.readAsText(file);
    }

    public onDelete() {
        var index;
        for (var i in this.ProjectList) {
            if (this.ProjectList[i].projectName == this.fileName) {
                index = i;
                break;
            }
        }
        this.UserService.deleteProject(this.id, this.fileName)
            .subscribe({
                next: () => {
                    this.ProjectList.splice(index, 1);
                    this.Data = "File deleted";
                },
                error: err => {
                    console.error(err);
                }
            })
    }

}
