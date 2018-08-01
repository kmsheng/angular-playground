import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageHelloWorldComponent } from './page-hello-world/page-hello-world.component';
import { PageTodosComponent } from './page-todos/page-todos.component';
import { PageCounterComponent } from './page-counter/page-counter.component';

const routes: Routes = [
  { path: '', redirectTo: 'helloworld', pathMatch: 'full' },
  { path: 'helloworld', component: PageHelloWorldComponent },
  { path: 'todos', component: PageTodosComponent },
  { path: 'counter', component: PageCounterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
