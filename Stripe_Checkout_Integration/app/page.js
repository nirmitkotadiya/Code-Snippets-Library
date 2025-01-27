// app/page.js
import CheckoutForm from './components/CheckoutForm';

const items = [
  {
    name: 'T-shirt',
    amount: 2000, // Price in cents (e.g., $20.00)
    quantity: 1,
  },
];

export default function Home() {
  return (
    <div>
      <h1>Checkout Example</h1>
      <CheckoutForm items={items} />
    </div>
  );
}
