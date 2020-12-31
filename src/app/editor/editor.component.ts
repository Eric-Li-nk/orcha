import { Component, OnInit, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
<<<<<<< HEAD
=======
import { Validators, FormBuilder, } from '@angular/forms';
>>>>>>> e07cdb26388605f69e88b9424efb8c1a99abe7bc


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

<<<<<<< HEAD
    constructor() {

=======
    constructor(private formBuilder: FormBuilder) {
        this.compile();
>>>>>>> e07cdb26388605f69e88b9424efb8c1a99abe7bc
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
<<<<<<< HEAD
    public import() {
        alert("Importer");
    }
    public export() {
        alert("Importer");
    }


    ngOnInit () {

     }

}
=======

    public compile() {
        const data = this.orcha.data;
        var i;
        for (i = 0; i < this.pattern.length; i++) {
            this.form = this.formBuilder.group({
            data:['',[Validators.required,Validators.pattern(this.pattern[i])]]});
            console.log("Pas de pb");
        }
    }

    ngOnInit() {
    }

}
>>>>>>> e07cdb26388605f69e88b9424efb8c1a99abe7bc
