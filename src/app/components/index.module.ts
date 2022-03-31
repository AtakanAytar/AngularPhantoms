import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';
import { PartialsModule } from './partials/partials.module';



@NgModule({
  imports: [BrowserModule,
     FormsModule,
      PartialsModule,

       RouterModule],

  declarations: [
      IndexComponent
  ],
  exports: [IndexComponent]
})

export class IndexModule {}
