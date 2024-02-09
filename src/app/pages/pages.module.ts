import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { CardComponent } from '../components/card/card.component';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MaterialModules } from '../core/material/material';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { ProfileComponent } from './profile/profile.component';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaypalSbscriptionComponent } from
'./paypal-sbscription/paypal-sbscription.component';
import { ConfirmationDialogComponent } from
'../components/confirmation-dialog/confirmation-dialog.component';
import { StripeSubscriptionComponent } from
'./stripe-subscription/stripe-subscription.component';
import { BraintreeSubscriptionComponent } from
'./braintree-subscription/braintree-subscription.component';
@NgModule({
  declarations: [
    CardComponent,
    HomeComponent,
    FormComponent,
    LoginComponent,
    PagesComponent,
    DialogComponent,
    NavbarComponent,
    SignupComponent,
    ProfileComponent,
    SnackbarComponent,
    DashboardComponent,
    PaypalSbscriptionComponent,
    ConfirmationDialogComponent,
    StripeSubscriptionComponent,
    BraintreeSubscriptionComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModules,
    PagesRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [MatDatepickerModule],
})
export class PagesModule {}
