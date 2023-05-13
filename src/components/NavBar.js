import '../style/index.css'
import searchIcon from '../assets/icons8-search.svg'
import shoppingIcon from '../assets/icons8-toolbox.svg'
import { Link, Outlet } from 'react-router-dom';

const NavBar = (props) => {
    return (
      <div id="nav-bar">
        <div id="nav-logo-cont" className="nav-bar-cont">
          <div id="logo-cont">
            <img src="" />
          </div>
        </div>
        <div id="nav-info-cont" className="nav-bar-cont">
          <div className="nav-misc-cont">
            <Link
              className="nav-info link-style"
              to={"/champions"}
              onClick={props.handleNavClick}
            >
              CHAMPIONS
            </Link>
          </div>
          <div className="nav-misc-cont">
            <Link
              className="nav-info link-style"
              to={"/items"}
              onClick={props.handleNavClick}
            >
              ITEMS
            </Link>
          </div>
        </div>
        <div id="shopp-cart-info-cont" className="nav-bar-cont">
          <div id="search-cont" className="info-cart">
            <img src={searchIcon} id="search-icon" />
            <input
              id="search-prompt"
              type="text"
              name="search"
              value={props.searchPrompt}
            />
          </div>
          <div id="cart-logo-cont" className="info-cart">
            <div id="cart-icon-cont" className="cart-icon-cont">
              <img src={shoppingIcon} id="shopping-icon" />
              <div id="cart-count">{props.cartCount}</div>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    );
}

export default NavBar