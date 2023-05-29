import '../../style/index.css'
import Checkout from './Checkout';

const ShoppingCart = (props) => {
    return (
      <div id="shopping-cart">
        <div className="page-width" id="shop-cont">
          <div id="shop-title-cont">
            <div id="shop-title">Shopping Cart</div>
          </div>
          <div id="display-shop-cont">
            <div id="items-to-buy-cont">
              <div className="items-to-buy">
                <span className="line"></span>
                <div className="item-to-buy"></div>
              </div>
            </div>
            <div id="checkout-cont">
              <Checkout />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ShoppingCart