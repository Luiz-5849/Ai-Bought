import Footer from "../components/footer";
import Header from "../components/header";
import Products from "../components/products";

export default function Produtos ({dataSource, getData}) {
  
  return (
    <>
      <Header />
      <Products dataSource={dataSource} getData={getData} />
      <Footer />
    </>
  )
}