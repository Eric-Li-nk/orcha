import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, Validators, FormBuilder } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { MustMatchDirective } from './_helpers/must-match.directive';
import { ValidateUsernameDirective } from './_helpers/validate-username.directive';
import { ValidateEmailDirective } from './_helpers/validate-email.directive';
import { AccountComponent } from './account/account.component';
@NgModule({
  declarations: [
    AppComponent,
   routingComponents,
   MustMatchDirective,
   ValidateUsernameDirective,
   ValidateEmailDirective,
   AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CKEditorModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }