import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHelloWorldComponent } from './page-hello-world/page-hello-world.component';
import { PageTodosComponent } from './page-todos/page-todos.component';
import { PageCounterComponent } from './page-counter/page-counter.component';
import { PageSecretComponent } from './page-secret/page-secret.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { AuthGuard } from './auth-guard.service';
import { PageRxjsComponent } from './page-rxjs/page-rxjs.component';

const routes: Routes = [
  { path: '', redirectTo: 'counter', pathMatch: 'full' },
  { path: 'helloworld', component: PageHelloWorldComponent },
  { path: 'todos', component: PageTodosComponent },
  { path: 'counter', component: PageCounterComponent },
  { path: 'login', component: PageLoginComponent },
  { path: 'secret', component: PageSecretComponent, canActivate: [AuthGuard] },
  { path: 'rxjs', component: PageRxjsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
