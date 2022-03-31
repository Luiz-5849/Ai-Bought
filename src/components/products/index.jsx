import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductsByCategory from "../productsByCategory";

export default function Products ({dataSource, getData}) {
  const [productList, setProductList] = useState([])
  const { categoria } = useParams();

  useEffect(() => {
    getData(dataSource.apiB, dataSource.apiE, setProductList);
  }, [])

  const productsOfCategory = productList.filter(product => product.categoria === categoria);
  return (
    <main className="main">
      <div className="main__products">
      <h2 className="products__category">Categoria: {categoria}</h2>
      {productsOfCategory.map((product, index) => {
        return (
          <ProductsByCategory product={product} key={index} />
        )
      })}
    </div>
    </main>
  )
}