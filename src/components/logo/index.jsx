import logo from '../../assets/img/Vector.svg';

export default function Logo () {
  return (
    <div className="logo">
      <img src={logo} alt="logo" className="logo__img" />
      <span className="logo__text-alura">Ai!</span><span className="logo__text-geek">Bought</span>
    </div>
  )
}