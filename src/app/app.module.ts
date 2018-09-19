import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AppRoutingModule } from './app-routing.module';
import { PageTodosComponent } from './page-todos/page-todos.component';
import { PageHelloWorldComponent } from './page-hello-world/page-hello-world.component';
import { PageCounterComponent } from './page-counter/page-counter.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './reducers/counter';
import { authReducer } from './reducers/auth';
import { StoreModule } from '@ngrx/store';
import { CounterEffects } from './effects/counter.effects';
import { AuthEffects } from './effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageSecretComponent } from './page-secret/page-secret.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { InMemoryDataService } from './in-memory-data.service';

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
    SidebarComponent,
    PageSecretComponent,
    PageLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
      auth: authReducer,
      router: routerReducer
    }),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([CounterEffects, AuthEffects]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
