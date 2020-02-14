import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { AngularDefaultComponent } from './angular-default/angular-default.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoComponent } from './todo/todo.component';

//welcome
const routes: Routes = [
  { path: '', component: LoginComponent }, //need to implement RouteGuardService to secure
  { path: 'login', component: LoginComponent },
  // { path: 'welcome', component: AngularDefaultComponent },
  // { path: 'welcome', component: WelcomeComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'default', component: AngularDefaultComponent, canActivate: [RouteGuardService] },
  { path: 'todos', component: ListTodosComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate: [RouteGuardService] },

  { path: '**', component: ErrorComponent }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
