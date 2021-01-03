import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { saveAs } from 'file-saver';
import { UserService } from '../_services/user.service';
import { Project } from '../_models/project';
import { User } from '../_models/user';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
}) export class EditorComponent implements OnInit {
    public Editor = ClassicEditor;
    public Data = "Write your code here";
    regex=/((authors)|(compute)|(description)|(title)|(domain)|(receive)|(send)|(title)|(version))/;
    public fileName = "Nom de projet par défaut";
    public ProjectList: Project[];
    public LoggedUser = JSON.parse(localStorage.getItem("user")) as User;
    public id = this.LoggedUser.id;

    constructor(private UserService: UserService) { 
        
    }

    ngOnInit () {
        
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
    
    public onChange ({ editor } : ChangeEvent) {
        const data = editor.getData();
        console.log (data);
    }

    public compile() {
        var ligne=this.Data.split( /\r?\n/ );
        
        console.log(ligne.length);
        var i =0;
        var verif = true;
        while (i<ligne.length && verif) {
            console.log(ligne[i]+"coucou");
            verif=this.regex.test(ligne[i]);
            i++;
        }
        if (verif) {
            alert("Pas de problème");
        }
        else {
            alert("Erreur à la ligne"+i);
        }
    }

    public onSave() {
        if( this.ProjectList.some( p => p.projectName == this.fileName) ) { 
            this.UserService.updateProject( this.id ,this.fileName, this.Data ) // Si le projet existe dans la liste des projet, on va update le projet.
                .subscribe({
                    next: Project => {
                        for(var i in this.ProjectList) {
                            if(this.ProjectList[i].projectName == Project.projectName) {this.ProjectList[i].content = Project.content}
                        }
                    },
                    error: err => {
                        console.error(err);
                    }
                }); 
        } else { 
            this.UserService.createProject( this.id ,this.fileName, this.Data) // Sinon (Le projet est nouveau) on va créer le projet.
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
        for(var i in this.ProjectList) {
            if(this.ProjectList[i].projectName == this.fileName) {this.Data = this.ProjectList[i].content}
        }
    }

    public export() {
        let data = new Blob([this.Data], {type: 'text/plain'});
        saveAs(data, this.fileName + ".txt");
    }

    public import(fileList: FileList) {
        let file = fileList[0];
        let fileReader = new FileReader();
        let self = this;
        fileReader.onloadend = function(x) {
            self.Data = fileReader.result as string;
        }
        fileReader.readAsText(file);
    }

    public onDelete() {
        var index;
        for(var i in this.ProjectList) {
            if(this.ProjectList[i].projectName == this.fileName) {
                index = i;
                break;
            }
        }         
        this.UserService.deleteProject(this.id, this.fileName)
            .subscribe({
                next: () => {
                    this.ProjectList.splice(index,1);
                    this.Data = "Fichier supprimé";
                },
                error: err => {
                    console.error(err);
                }
            })
    }

}
