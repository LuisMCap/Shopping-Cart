import { useState, useEffect } from "react";

const CheckoutItem = (props) => {

    useEffect(() => {
      props.setCartItems((prevCartItems) =>
        prevCartItems.map((item) => {
          if (item.name.toUpperCase() == props.name) {
            let newTotal = props.price * props.quantity;
            return { ...item, total: newTotal };
          }
          return item;
        })
      );
    }, [props.quantity]);

    const increaseItemQuant = () => {
      props.setCartItems((prevCartItems) =>
        prevCartItems.map((item) => {
          if (item.name.toUpperCase() == props.name) {
            let newQuant = props.quantity + 1;
            return { ...item, quantity: newQuant };
          }
          return item;
        })
      );
    };

    const decreaseItemQuant = () => {
      if (props.quantity == 1) {
        alert("You cannot buy a negative amount, sorry");
        return;
      }

      props.setCartItems((prevCartItems) =>
        prevCartItems.map((item) => {
          if (item.name.toUpperCase() == props.name) {
            let newQuant = props.quantity - 1;
            return { ...item, quantity: newQuant };
          }
          return item;
        })
      );
    };

    const removeItem = () => {
      props.setCartItems((prevCartItems) => {
        const newCartItems = prevCartItems.filter((item) => {
          return item.name.toUpperCase() !== props.name
        });
      return newCartItems});
    };
  
  return (
    <div className="item-to-buy-cont">
      <div className="item-to-buy">
        <div className="item-img-cont">
          <img src={props.img} />
        </div>
        <div className="item-to-buy-info-cont">
          <div className="item-to-buy-info remove" onClick={removeItem}>Remove x</div>
          <div className="item-to-buy-info item-info-title">{props.name}</div>
          <div className="item-to-buy-info role-champ-info">
            <div className="role-title">Roles:</div>
            <div className="role-champ">{props.role}</div>
          </div>
          <div className="item-to-buy-info">{props.price}</div>
          <div className="item-to-buy-info inc-dec-item-checkout-cont">
            <button className="item-checkout-btn decrease-q-item inc-dec-item-checkout" onClick={decreaseItemQuant}>
              -
            </button>
            <div className="selected-item-q inc-dec-item-checkout">
              {props.quantity}
            </div>
            <button className="item-checkout-btn increase-q-item inc-dec-item-checkout" onClick={increaseItemQuant}>
              +
            </button>
          </div>
          <div className="item-to-buy-info">Total: {props.total}</div>
        </div>
      </div>
      <span className="line"></span>
    </div>
  );
};

export default CheckoutItem;
