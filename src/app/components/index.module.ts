import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IndexComponent } from './index.component';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [IndexComponent]
})

export class IndexModule { }
