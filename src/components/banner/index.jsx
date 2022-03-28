import moldura from '../../assets/img/moldura.png'
import mulher1 from '../../assets/img/mulher1.png'
import mulher2 from '../../assets/img/mulher2.png'
import mulher3 from '../../assets/img/mulher3.png'

export default function Banner ({ promotion }) {
  return (
    <div className="main__banner">
      <div className='banner__text'>
        <span className="banner__title">Promoção Imperdível!</span>
        <span className="banner__subtitle">Março - o mês das mulheres</span>
      </div>
      <div className='banner__women'>
        <img src={mulher1} className="women__img women_1" />
        <img src={mulher2} className="women__img women_2" />
        <img src={mulher3} className="women__img women_3" />
      </div>
      <div className="banner__promotion">
        <div className="promotion__imgs">
          <img src={moldura} alt="moldura" className="promotion__img-moldure" />
          <img className="promotion__img-product" src={promotion.imagem} />
        </div>
        <div className="promotion__product">
          <span className="product__name">{promotion.nome}</span>
          <span className="product__value">R$ {promotion.preco}</span>
        </div>
      </div>
    </div>
  )
}