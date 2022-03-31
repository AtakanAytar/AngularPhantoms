import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { IndexModule } from './components/index.module';
import { IndexComponent } from './components/index.component';
import { IncidentModule } from "./components/incident/incident.module";
import { ListComponent } from './components/incident/list.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IndexModule,
    IncidentModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "incident/list", component: ListComponent },
      { path: "**", redirectTo: "" }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
