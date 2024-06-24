import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { DiscoveryComponent } from './discovery/discovery.component';
import { LoginComponent } from './login/login.component';
import { ConfirmPhoneComponent } from './confirm-phone/confirm-phone.component';
import { TermsAndConditionComponent } from './terms-and-condition/terms-and-condition.component';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'discovery', component: DiscoveryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'confirm-phone', component: ConfirmPhoneComponent },
  { path: 'terms-and-condition', component: TermsAndConditionComponent },
  {path:'payment-methods',component:PaymentMethodComponent},
  {path:'home',component:HomeComponent},

  { path: '', redirectTo: '/welcome', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' } // wildcard route for 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
