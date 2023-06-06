import { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList/ProductList';
import Footer from '../../components/Footer/Footer';
import { Product } from '../../components/_interfaces';
import Header from '../../components/Header/Header';

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
      <Header />  
      <ProductList products={productList} />
    </main> 
  )
}