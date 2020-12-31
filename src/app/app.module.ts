import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, Validators, FormBuilder } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

=======
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RouterModule } from '@angular/router';
>>>>>>> e07cdb26388605f69e88b9424efb8c1a99abe7bc

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
   routingComponents
=======
   routingComponents,
>>>>>>> e07cdb26388605f69e88b9424efb8c1a99abe7bc
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CKEditorModule,
<<<<<<< HEAD
    RouterModule,
    FormsModule,
=======
    FormsModule,
    RouterModule,
    Validators,
    FormBuilder,
>>>>>>> e07cdb26388605f69e88b9424efb8c1a99abe7bc
  ],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule { }
=======
export class AppModule { }
>>>>>>> e07cdb26388605f69e88b9424efb8c1a99abe7bc
