import { useEffect, useState } from "react"
import {apiB, apiE} from '../../datasource/index.js'
import Banner from "../banner"
import Card from "../card"

export default function Sections () {
  const [listaProdutos, setListaProdutos] = useState()
  const [index, setIndex] = useState(0);

  useEffect(() => {
    apiB
      .get('/')
      .then(response => {
        setListaProdutos(response.data)
      })
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    apiE
      .get('/')
      .then(response => {
        const tratamento = response.data.map(produto => (
          {
            id: produto.id,
            nome: produto.name,
            categoria: 'Diversos',
            descricao: produto.description,
            detalhes: {
              adjetivo: produto.details.adjective,
              material: produto.details.material
            },
            preco: produto.price,
            temDisconto: produto.hasDiscount,
            valorDesconto: produto.discountValue,
            galeriaImagens: produto.gallery,
            imagem: produto.gallery[0]
          }
          )) 
        setListaProdutos(valorAntigo => [...valorAntigo, ...tratamento])
      })
      .catch(err => console.error(err));
  }, [])
  
  useEffect(() => {
    if (listaProdutos) {
      if(index == listaProdutos.length - 1) {
        setIndex(state => state = 0)
      }
    }
    setTimeout(() => {
      setIndex(state => state + 1);
    }, 8000)
  }, [index])

  function Render () {
    const categories = [...new Set(listaProdutos.map(produto => produto.categoria))]

    return (
      <div className="main">
        <Banner promotion={listaProdutos[index]} />
        <div className="main__sections">
        {categories.map((categoria, index) => {
          const produtosPorCategoria = listaProdutos.filter(produto => produto.categoria === categoria)
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
  
  return (
    <div>{listaProdutos ? Render() : ''}</div>
  )
}   

