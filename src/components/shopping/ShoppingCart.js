import '../../style/index.css'
import Checkout from './Checkout';
import CheckoutItem from './CheckoutItem';
import Utils from '../../utils/utils';

const ShoppingCart = (props) => {
    return (
      <div id="shopping-cart">
        <div className="page-width" id="shop-cont">
          <div id="shop-title-cont">
            <div id="shop-title">Shopping Cart</div>
          </div>
          <div id="display-shop-cont">
            <div id="items-to-buy-cont">
            {props.cartItems.map(item=>{
                let name = Utils.makeUpperCase(item.name)
                return (
                  <CheckoutItem
                    name={name}
                    price={item.price}
                    quantity={item.quantity}
                    img={item.img}
                    role={item.role}
                    total={item.total}
                    setCartItems={props.setCartItems}
                  />
                );
            })}
            </div>
            <div id="checkout-cont">
              <Checkout 
                cartItems={props.cartItems}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default ShoppingCart