import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { IndexModule } from './components/index.module';
import { IndexComponent } from './components/index.component';
import { SignInComponent } from './auth/signin.component';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "users/signin", component: SignInComponent },
      // { path: "users/signup", component: SignUpComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


