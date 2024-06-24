import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Only if you need routing
import { LoginComponent } from '../login/login.component';
import { AppComponent } from '../app.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // Add other form components here if you generated more
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule // Only if you need routing for form components
  ],
  exports: [
    LoginComponent,
    AppComponent
    // Add other form components here if you want to use them outside this module
  ]
})
export class FormModule { }
