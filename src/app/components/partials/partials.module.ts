import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HeaderComponent } from './header.component';
import { FooterComponent } from '../partials/footer.component';

@NgModule({
  imports: [BrowserModule,
        FormsModule,
        RouterModule],
  declarations: [
        HeaderComponent,
        FooterComponent
  ],

  exports: [HeaderComponent,
    FooterComponent]
})

export class PartialsModule { }
