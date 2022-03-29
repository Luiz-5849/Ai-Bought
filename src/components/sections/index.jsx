import { useEffect, useState } from "react"
import Banner from "../banner"
import Card from "../card"

export default function Sections ({productList = []}) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
   
    if(index === (productList ? productList.length - 1 : null)) {
      setIndex(state => state = 0)
    }
    
    setTimeout(() => {
      setIndex(state => state + 1);
    }, 8000)
  }, [index])
  
  const categories = [...new Set(productList.map(product => product.categoria))]
  return (
    <div className="main">
    <Banner promotion={productList[index]} />
      <div className="main__sections">
      {categories.map((category, index) => {
          const productsByCategory = productList.filter(product => product.categoria === category)

          const sectionProducts = [];
          for (let i = 0; i < productsByCategory.length && i < 7; i++) {
            sectionProducts.push(productsByCategory[i])
          }
          return(
            <section className="section" key={index}>
              <div className="section__title">
                <h2 className="section__name">{category}</h2>
                <button className="section__button">Ver tudo</button>
              </div>
              <div className="section__products">
                {sectionProducts.map((product, index) => {
                    return (
                      <Card product={product} key={index} />
                    )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
 
}   
