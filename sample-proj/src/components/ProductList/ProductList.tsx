import React, { useEffect } from 'react';
import { Product } from '../_interfaces';
import "./ProductList.scss";

export default function ProductList(props: {
  products: Product[],
}) {
  return (
    <section>
      <ul className="five-grid">
        {
          props.products.map((product) => {
            return (
              <li key={product.id} className="product-item">
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