// app/components/CheckoutForm.js
'use client'; // Client-side component

import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const CheckoutForm = ({ items }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    // Call the API to create a checkout session
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items }),
    });

    const { id } = await response.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId: id });

    if (error) {
      console.error('Error during checkout: ', error);
    }
  };

  return <button onClick={handleCheckout}>Checkout</button>;
};

export default CheckoutForm;
