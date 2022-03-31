import logo from '../../assets/img/Vector.svg';

export default function Logo () {

  function redirect () {
    window.location.href = "/"
  }

  return (
    <div className="logo" onClick={redirect} >
      <img src={logo} alt="logo" className="logo__img" />
      <span className="logo__text-alura">Ai!</span><span className="logo__text-geek">Bought</span>
    </div>
  )
}