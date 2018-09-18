import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppRoutingModule } from './app-routing.module';
import { PageTodosComponent } from './page-todos/page-todos.component';
import { PageHelloWorldComponent } from './page-hello-world/page-hello-world.component';
import { PageCounterComponent } from './page-counter/page-counter.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './reducers/counter';
import { StoreModule } from '@ngrx/store';
import { CounterEffects } from './effects/counter.effects';
import { EffectsModule } from '@ngrx/effects';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    PageTodosComponent,
    PageHelloWorldComponent,
    PageCounterComponent,
    CounterComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({count: counterReducer}),
    EffectsModule.forRoot([CounterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
