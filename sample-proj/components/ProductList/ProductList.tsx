import React, { useEffect } from 'react';

interface Product {
  brand?: string,
  category?: string,
  description?: string,
  discountPercentage?: number,
  id: number,
  images?: string[],
  price?: number,
  rating?: number,
  stock?: number,
  thumbnail?: string,
  title?: string
}

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