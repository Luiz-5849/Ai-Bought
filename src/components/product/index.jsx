export default function Product ({product = []}) {
 
  return (
    <div className="main">
      <div className="main__product">
        <div className="product__view">
          <img className="product__img" src={product.imagem} alt={product.nome} />
        </div>
        <div className="product__txt">
          <h2 className="product__name">{product.nome}</h2>
          <span className="product__price">R$ {product.preco}</span>
          <p className="product__description">{product.descricao}</p>
          <button className="product__button">Adicionar ao carrinho</button>
        </div>
      </div>
    </div>
  )
}