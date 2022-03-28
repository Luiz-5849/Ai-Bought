import { useEffect, useState } from "react"
import {apiB, apiE} from '../../datasource/index.js'
import Banner from "../banner"
import Card from "../card"

export default function Sections () {
  const [productList, setProductList] = useState([{}])
  const [index, setIndex] = useState(0);

  useEffect(() => {
    apiB
      .get('/')
      .then(response => {
        setProductList(response.data)
      })
      .catch(err => console.error(err));    
  }, [])

  useEffect(() => {
    apiE
      .get('/')
      .then(response => {
        const tratamento = response.data.map(product => (
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
          )) 
        setProductList(valorAntigo => [...valorAntigo, ...tratamento])
      })
      .catch(err => console.error(err));
  }, [])
  
  useEffect(() => {
  
    if(index === productList ? productList.length - 1 : null) {
      setIndex(state => state = 0)
    }
    
    setTimeout(() => {
      setIndex(state => state + 1);
    }, 8000)
  }, [index])

  const categories = [...new Set(productList.map(produto => produto.categoria))]

  return (
    <div className="main">
      <Banner promotion={productList[index]} />
      <div className="main__sections">
        {categories.map((categoria, index) => {
          const produtosPorCategoria = productList.filter(produto => produto.categoria === categoria)

          let sectionProducts = [];
          for (let i = 0; i < produtosPorCategoria.length && i < 7; i++) {
            sectionProducts.push(produtosPorCategoria[i])
          }
          return(
            <section className="section" key={index}>
              <div className="section__title">
                <h2 className="section__name">{categoria}</h2>
                <button className="section__button">Ver tudo</button>
              </div>
              <div className="section__products">
                {
                  sectionProducts.map((produto, index) => {
                    return (
                      <Card nome={produto.nome} imagem={produto.imagem} preco={produto.preco} key={index} />
                      )
                  })
                }
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
 
}   
