
import '../assets/style/css/style.css';
import Header from '../components/header/index.jsx'
import Footer from '../components/footer';
import Sections from '../components/sections';

export default function Home() {
  
  
  return (
    <div className="App">
      <Header />
      <Sections />
      <Footer />
    </div>
  );
}
