import { useEffect, useState } from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import ProductList from '../../../components/ProductList/ProductList';
import Footer from '../../../components/Footer/Footer';

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

export default function Homepage() {
  const [productList, setProductList]= useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data) => {
      // console.log([...productList, ...data.products]);
      const products: Product[] = data.products;
      setProductList([...productList, ...products]);
    })
  }, [])
  return (
    <div>
      <Navbar />
      <section>
        <header>Blue Star</header>
      </section>
      <ProductList products={productList} />
      <Footer />
    </div>
  )
}