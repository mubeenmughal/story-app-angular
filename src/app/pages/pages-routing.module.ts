import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from '../core/guard/loginGuard';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PaypalSbscriptionComponent } from './paypal-sbscription/paypal-sbscription.component';
import { StripeSubscriptionComponent } from './stripe-subscription/stripe-subscription.component';
import { BraintreeSubscriptionComponent } from './braintree-subscription/braintree-subscription.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [authGuard],
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [authGuard],
      },
      {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [authGuard],
      },
      {
        path: 'form',
        component: FormComponent,
        canActivate: [authGuard],
      },
      {
        path: 'stripe-subscription',
        component: StripeSubscriptionComponent,
        canActivate: [authGuard],
      },
      {
        path: 'paypal-subscription',
        component: PaypalSbscriptionComponent,
        canActivate: [authGuard],
      },
      {
        path: 'braintree-subscription',
        component: BraintreeSubscriptionComponent,
        canActivate: [authGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [authGuard],
      },
      {
        path: 'signup',
        component: SignupComponent,
        canActivate: [authGuard],
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
