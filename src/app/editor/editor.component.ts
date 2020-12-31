import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';


@Component({
    selector: 'app-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.css']
}) 
export class EditorComponent implements OnInit {
    @ViewChild("orcha", { static: false }) orcha: any; 
    public Editor = ClassicEditor;
    public Data = "Write your code here";
    form;

    pattern:Array<string> = [
        "authors(\\s*):(\\s*)(?<authors>.*?)",
        "compute (?<application>.*?)( with (?<parameters>.*))?",
        "description(\\s*):(\\s*)(?<description>.*?)",
        "domain(\\s*):(\\s*)(?<domain>.*?)",
        "receive (?<event>.*?) from (?<source>\\w+)( condition (?<condition>.*))?",
        "send (?<data>.*?)(\\.(?<variables>.*))? to (?<destinations>.*?)",
        "title(\\s*):(\\s*)(?<title>.*?)",
        "version(\\s*):(\\s*)(?<version>.*?)",
    ];

    constructor() {

    }
    
    public onChange ({ editor } : ChangeEvent) {
        const data = editor.getData();
        console.log (data);
    }

    public onSave() {
        alert("Sauvegarder");
    }

    public onLoad() {
        alert("Importer");
    }
    public import() {
        alert("Importer");
    }
    public export() {
        alert("Importer");
    }


    ngOnInit () {

     }

}
