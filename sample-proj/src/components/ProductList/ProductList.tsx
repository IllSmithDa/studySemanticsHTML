import React, { useEffect } from 'react';
import { Product } from '../_interfaces';

export default function ProductList(props: {
  products: Product[],
}) {
  return (
    <section>
      <ul>
        {
          props.products.map((product) => {
            return (
              <li key={product.id}>
                <h2>{product.title}</h2>
                <img alt={`${product.title}`} src={product.thumbnail} />
                <p>${product.price}.99</p>
                <p>{product.description}</p>
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}