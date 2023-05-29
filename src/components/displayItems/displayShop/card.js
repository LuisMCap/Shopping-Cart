const Card = (props) => {
  return (
    <div className="card" key={props.k}>
      <div className="name-cont">{props.name}</div>
      <div className="img-cont">
        <img src={props.img} />
      </div>
      <div className="buy-cont">
        <div className="inc-dec-cont">
          <button
            className="dec"
            onClick={(e) => props.decreaseQuant(e, props.name)}
          >
            -
          </button>
          <div className="quant">{props.quant}</div>
          <button
            className="inc"
            onClick={(e) => props.increaseQuant(e, props.name)}
          >
            +
          </button>
        </div>
        <div className="add-card-cont">
          <button className="add-card-btn" onClick={(e,)=> props.clickAddBtn(e, props.name, props.price, props.quant, props.img, props.role)}>Add</button>
        </div>
      </div>
      <div className="price-cont">
        <div className="item-price">{props.price}</div>
      </div>
    </div>
  );
};

export default Card;
