import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
}) export class EditorComponent implements OnInit {
    public Editor = ClassicEditor;
    public Data = "Write your code here";
    public fileName = "Nom de projet par défaut";

    constructor() { }

    
    public onChange ({ editor } : ChangeEvent) {
        const data = editor.getData();
        console.log (data);
    }

    public onSave() {
        alert("Save");
    }

    public onLoad() {
        alert("Import");
    }

    public export() {
        let data = new Blob([this.Data], {type: 'text/plain'});
        saveAs(data, this.fileName + ".txt");
    }

    import(fileList: FileList) {
        let file = fileList[0];
        let fileReader = new FileReader();
        let self = this;
        fileReader.onloadend = function(x) {
            self.Data = fileReader.result as string;
        }
        fileReader.readAsText(file);
    }
    ngOnInit () {

     }

}
