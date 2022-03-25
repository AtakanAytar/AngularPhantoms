import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';
import { PartialsModule } from './partials/partials.module';
import { LoginComponent } from '../auth/components/login/login.component';


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
