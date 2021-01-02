import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EditorComponent } from './editor/editor.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrchaComponent } from './orcha/orcha.component';
import { PasswordComponent } from './password/password.component';
import { RegisterComponent } from './register/register.component';
import { AccountComponent } from './account/account.component';
import { AuthGuard } from './_helpers/auth.guard';

const routes: Routes = [
  {path:'contact', component: ContactComponent},
  {path:'editor', component: EditorComponent, canActivate: [AuthGuard]},
  {path:'help', component: HelpComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'password', component:PasswordComponent},
  {path:'register', component:RegisterComponent},
  {path:'account', component:AccountComponent, canActivate: [AuthGuard]},
  {path:'', component:OrchaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactComponent, EditorComponent, HelpComponent, HomeComponent, LoginComponent, OrchaComponent, PasswordComponent, RegisterComponent, AccountComponent]
