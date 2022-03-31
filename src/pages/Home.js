import '../assets/style/css/style.css';
import Header from '../components/header/index.jsx'
import Footer from '../components/footer';
import Sections from '../components/sections';

export default function Home({productList = []}) {  
  return (
    <div className="App">
      <Header />
      <Sections productList={productList} />
      <Footer />
    </div>
  );
}
