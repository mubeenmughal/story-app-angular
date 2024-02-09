import { Component, OnInit, DoCheck } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-stripe-subscription',
  templateUrl: './stripe-subscription.component.html',
  styleUrls: ['./stripe-subscription.component.scss'],
})
export class StripeSubscriptionComponent implements OnInit, DoCheck {
  paymentHandler: any = null;
  stripeData: any;
  constructor() {}

  ngOnInit(): void {
    localStorage.setItem('data', 'undefined');
    this.invokeStripe();
  }

  ngDoCheck(): void {
    if (localStorage.getItem('flag') == 'true') {
      let obj: any = localStorage.getItem('stripe-token');
      this.stripeData = JSON.parse(obj);
      localStorage.setItem('stripe-token', 'undefined');
      localStorage.setItem('flag', 'false');
    }
  }

  makePayment = (amount: any) => {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: environment.stripeKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        const obj = JSON.stringify({ stripeToken });
        localStorage.setItem('stripe-token', obj);
        localStorage.setItem('flag', 'true');
      },
    });
    paymentHandler.open({
      name: 'Angular Stripe Method',
      description: '3 widgets',
      amount: amount * 100,
    });
  };

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';

      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: environment.stripeKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
