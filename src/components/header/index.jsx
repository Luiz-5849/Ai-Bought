import lupa from '../../assets/img/lupa.svg';
import Logo from '../logo/index.jsx'

export default function Header () {
  return (
    <header className="header">
      <div className="header__left">
        <Logo />
        <div className="header__search">
          <input type="search" className="header__search-input" placeholder="O que deseja encontrar?" />
          <img src={lupa} alt="lupa" className="header__search-img" />
        </div>
      </div>
      <button className="header__button">Login</button>
    </header>
  )
}