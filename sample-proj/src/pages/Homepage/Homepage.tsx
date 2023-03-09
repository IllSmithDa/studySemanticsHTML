import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import { Product } from '../../components/interfaces';

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
    <main>
      <Navbar />
      <section>
        <header>Blue Star</header>
      </section>
      <ProductList products={productList} />
      <Footer />
    </main>
  )
}