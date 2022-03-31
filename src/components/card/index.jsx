import { Link } from "react-router-dom";

export default function Card ({product}) {
  return (
    <div className="section__product">
      <img src={product.imagem} className="product__img" />
      <span className="product__name">{product.nome}</span>
      <span className="product__value">R$ {product.preco}</span>
      <Link className="product__link" to={`/produto/${product.id}`} >Ver produto</Link>
    </div>
  ) 
}
