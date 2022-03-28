import { useParams } from "react-router-dom"

import '../assets/style/css/style.css';
import Header from '../components/header/index.jsx'
import Footer from '../components/footer';
import Product from '../components/product';

export default function Produto () {

  let params = useParams();
  console.log(params)
  return (
    <div>
      <Header />
      <p>{params.nome}</p>
      <Product />
      <Footer />
    </div>
  );
}
