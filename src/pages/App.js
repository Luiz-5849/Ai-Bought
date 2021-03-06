import { useState, useEffect } from 'react';
import { apiB, apiE } from '../datasource/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home.js';
import Produto from './Produto.js'
import Produtos from './Produtos.js';

function App () {
  const [productList, setProductList] = useState([]);

  async function getData (apiB, apiE, setFunc) {
    const { data } = await apiB.get('/');
    const response = await apiE.get('/');

    const products = [...data, ...response.data.map(product => (
      {
        id: product.id,
        nome: product.name,
        categoria: 'Diversos',
        descricao: product.description,
        detalhes: {
          adjetivo: product.details.adjective,
          material: product.details.material
        },
        preco: product.price,
        temDisconto: product.hasDiscount,
        valorDesconto: product.discountValue,
        galeriaImagens: product.gallery,
        imagem: product.gallery[0]
      }
    ))].map((product, index) => ({
      ...product,
      id: index + 1
    }));
    setFunc(products);
  }

  useEffect(() => {
    getData(apiB, apiE, setProductList);
  }, []);


  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home productList={productList} />} exact />
        <Route path='/produto/:id' element={<Produto getData={getData} dataSource={{apiB, apiE}} />} />
        <Route path='/produtos/:categoria' element={<Produtos getData={getData} dataSource={{apiB, apiE}} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;