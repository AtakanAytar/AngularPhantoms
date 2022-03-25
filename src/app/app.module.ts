import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { IndexModule } from './components/index.module';
import { IndexComponent } from './components/index.component';
import { LoginComponent } from './auth/components/login/login.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "auth/login", component: LoginComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
