import React, { useEffect, useState } from 'react';
import productsData from '../products.json'; 

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name}: ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
