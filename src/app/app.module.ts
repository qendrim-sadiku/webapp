import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { AppComponent } from './app.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component'; // Import the component
import { WelcomeComponent } from './welcome/welcome.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { StateDataService } from './state-data.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { ConfirmPhoneComponent } from './confirm-phone/confirm-phone.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { BottomModalComponent } from './components/bottom-modal/bottom-modal.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TermsAndConditionComponent,
    LoginComponent,
    ConfirmPhoneComponent,
    PaymentMethodComponent,
    WelcomeComponent,
    HomeComponent,
    BottomModalComponent,
    DiscoveryComponent // Declare TermsAndConditionComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    NgSelectModule,
    AppRoutingModule
    // Add other modules as needed
  ],
  providers: [StateDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
