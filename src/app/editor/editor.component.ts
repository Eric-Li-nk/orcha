import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
}) export class EditorComponent implements OnInit {
    public Editor = ClassicEditor;
    public Data = "Write your code here";
    regex = [
        /authors/,
        /compute/,
        /description/,
        /domain/,
        /receive/,
        /send/,
        /title/,
        /version/,
    ];

    constructor() { }

    
    public onChange ({ editor } : ChangeEvent) {
        const data = editor.getData();
        console.log (data);
    }

    public compile() {
        var i =0;
        var verif = true;
        while (i<this.regex.length && verif) {
            verif=this.regex[i].test(this.Data);
            i++;
        }
        if (verif) {
            alert("Pas de problème");
        }
        else {
            alert("Erreur");
        }
    }

    public onSave() {
        alert("Save");
    }

    public onLoad() {
        alert("Import");
    }

    public export() {
        alert("Export")
    }

    ngOnInit () {

     }

}
