import { Link } from "react-router-dom"

export default function ProductsByCategory ({product}) {
  console.log(product)
  return (
    <div className="product">
      <div className="product__photo">
        <img className="product__img" src={product.imagem} alt={product.nome} />
      </div>
      <div className="product__txt">
        <h2 className="product__name">{product.nome}</h2>
        <span>R$ {product.preco}</span>
        <Link className="product__link" to={`/produto/${product.id}`}>Ver produto</Link>
      </div>
    </div>
  )
}