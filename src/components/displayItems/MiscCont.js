import '../../style/index.css'

const MiscCont = (props) => {
    return (
      <div id="misc-cont">
        <div className="page-width" id="misc">
          <div className="misc-info-cont" id="display-info-cont">
            <div id="display-name-cont">
              <div id="display-name" className="display">
                {props.selectedCategory}
              </div>
            </div>
            <div id="display-quantity-cont">
              <div id="display-quantity" className="display">
                {props.totalQuant == props.displayedQuant
                  ? `Showing: ${props.totalQuant} products`
                  : `Showing: ${props.displayedQuant} products out of ${props.totalQuant}`}
              </div>
            </div>
          </div>
          <div className="misc-info-cont" id="display-logo-cont">
            <img
              src={props.img}
              id="display-image"
              style={{
                objectPosition:
                  props.selectedCategory == "ITEMS" ? "90% 90%" : "22% 22%",
              }}
            />
          </div>
        </div>
      </div>
    );
}

export default MiscCont;