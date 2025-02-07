```javascript
// pages/product/[productId].js

import { Suspense } from 'react';

async function getProduct(productId) {
  // Simulate fetching data from an API
  await new Promise(resolve => setTimeout(resolve, 500)); 
  return {
    id: productId,
    name: `Product ${productId}`
  };
}

export default async function Product({ params }) {
  const product = await getProduct(params.productId);
  return (
    <div>
      <h1>{product.name}</h1>
      <p>ID: {product.id}</p>
    </div>
  );
}
```