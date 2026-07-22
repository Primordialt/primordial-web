export type Product = {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  currency: string;
  price: string;
  paymentUrl: string;
};

export const products: Product[] = [
  {
    id: 'satellite-internet',
    title: 'Satellite Internet Subscription',
    category: 'Internet',
    description:
      'Reliable satellite internet subscription designed for businesses requiring dependable connectivity nationwide.',
    image: '/lobatan/logo-light.svg',
    currency: 'NGN',
    price: '226,000',
    paymentUrl: 'https://example.com/pay/satellite',
  },
  {
    id: 'fibre-network',
    title: 'Fibre Network Subscription',
    category: 'Networking',
    description:
      'High-speed fibre internet subscription for businesses requiring stable and fast network connectivity.',
    image: '/lobatan/logo-light.svg',
    currency: 'NGN',
    price: '39,750',
    paymentUrl: 'https://paystack.shop/pay/i8j3m8l9ah',
  },
  {
    id: 'ngnix-ssl',
    title: 'NGNIX Model SSL',
    category: 'Security',
    description:
      "Enterprise SSL certificate for securing websites, improving trust, and encrypting customer data.",
    image: '/lobatan/logo-light.svg',
    currency: 'USD',
    price: '399',
    paymentUrl: 'https://example.com/pay/ssl',
  },
];

export const categories = ['All', 'Internet', 'Networking', 'Security'];
