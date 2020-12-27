import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, Validators, FormBuilder } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CKEditorModule,
    FormsModule,
    RouterModule,
    Validators,
    FormBuilder,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }