export const MOBILE_NO_VALIDATION_PATTERN =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

export const ZIPCODE_VALIDATION_PATTERN = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

export const ROUTES_CONTENT = [
  {
    title: 'Home',
    route: 'home',
  },
  {
    title: 'Table',
    route: 'dashboard',
  },
  {
    title: 'Form',
    route: 'form',
  },
  {
    title:'Stripe',
    route: 'stripe-subscription',
  },
  {
    title:'Paypal',
    route: 'paypal-subscription',
  },
  {
    title:'BrainTree',
    route: 'braintree-subscription',
  }
];

export const MENU_CONTENT = [
  {
    title:'Home',
    icon: 'home',
    route: 'home',
    disable: false,
  },
  {
    title:'Table',
    icon: 'table_chart',
    route: 'dashboard',
    disable: false,
  },
  {
    title:'Form',
    icon: 'library_add',
    route: 'form',
    disable: false,
  },
  {
    title:'Stripe Payment',
    icon: 'payment',
    route: 'stripe-subscription',
    disable: false,
  },
  {
    title:'Paypal Payment',
    icon: 'paypal',
    route: 'paypal-subscription',
    disable: false,
  },
  {
    title:'BrainTree Payment',
    icon: 'account_balance_wallet',
    route: 'braintree-subscription',
    disable: false,
  },
  {
    title:'Signup',
    icon: 'logout',
    route: 'signup',
    disabled: false,
  },
  {
    title:'Login',
    icon: 'login',
    route: 'login',
    disabled: false,
  },
]
