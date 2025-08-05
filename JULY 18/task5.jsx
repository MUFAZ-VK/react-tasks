import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", inStock: true },
    { id: 2, name: "Mouse", inStock: false },
    { id: 3, name: "Monitor", inStock: true },
    { id: 4, name: "Keyboard", inStock: false },
  ]);

  return (
    <div>
      <h3>Product Stock Status</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - 
            {product.inStock 
              ? <span style={{ color: 'green' }}>  Stock ✅</span> 
              : <span style={{ color: 'red' }}> Stock ❌</span>
            }
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
