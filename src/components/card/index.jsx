import { Link, Outlet } from "react-router-dom";

export default function Card ({ imagem, nome, preco }) {
  return (
    <div className="section__product">
      <img src={imagem} className="product__img" />
      <span className="product__name">{nome}</span>
      <span className="product__value">R$ {preco}</span>
      <Link className="product__link" to={`/produto?nome=${nome}`} >Ver produto</Link>
      {/* <span className="product__see"><a href="/produto" className="product__link">Ver produto</a></span> */}
      <Outlet />
    </div>
  )
}

