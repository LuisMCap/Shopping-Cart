import amazonImg from '../../assets/177px-Amazon_Pay_logo.svg.png'
import paypalImg from "../../assets/PayPal.svg.png";
import { Link } from "react-router-dom";

const Checkout = (props) => {
    return (
      <div id="checkout">
        <div id="shopping-cart-info-cont" className="single-checkout-cont">
          <div className="shopping-cart-info" id="subtotal-cont">
            <div id="subtotal-title">Subtotal</div>
            <div id="subtotal-price">$279.00</div>
          </div>
          <div className="shopping-cart-info" id="taxes-info-cont">
            <div id="taxes-info">Taxes and shipping will be calculated at checkout</div>
          </div>
          <div className="shopping-cart-info" id="currency-info-cont">
            <div id="currency-info">Orders will be processed in IP</div>
          </div>
        </div>
        <div id="checkout-btn-cont" className="single-checkout-cont">
          <button className="checkout-btn" id="checkout-click">
            CHECKOUT
          </button>
          <button className="checkout-btn btn-img-btn" id="amazon">
            <img src={amazonImg} id="amazon-img" className="btn-img" />
          </button>
          <button className="checkout-btn btn-img-btn" id="paypal">
            <img src={paypalImg} id="paypal-img" className="btn-img" />
          </button>
        </div>
        <div id="continue-shopping-cont" className="single-checkout-cont">
          <Link id="continue-shopping" to={"/champions"} className="link-style">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
}

export default Checkout