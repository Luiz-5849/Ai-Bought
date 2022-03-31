import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import '../assets/style/css/style.css';
import Header from '../components/header/index.jsx'
import Footer from '../components/footer';
import Product from '../components/product';

export default function Produto ({dataSource, getData}) {
  const [productList, setProductList] = useState([])
  const params = useParams();
  const id = Number(params.id)

  useEffect(() => {
    getData(dataSource.apiB, dataSource.apiE, setProductList);
  }, [])

  const product = productList.find(product => product.id === id)
  
  return (
    <div>
      <Header />
      <Product product={product} />
      <Footer />
    </div>
  );
}
