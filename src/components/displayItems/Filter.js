import Utils from "../../utils/utils";
import FilterBox from "./displayCategories/FilterBox";
import Card from "./displayShop/card";

const Filter = (props) => {
  return (
    <div id="filter-comp">
      <div className="page-width" id="filter-cont">
        <div id="filter">
          {props.filterBoxesCategory.map((category) => {
            return (
              <FilterBox
                name={category.name}
                category={category.options}
                updateFilterChamp={props.updateFilterChamp}
              />
            );
          })}
        </div>
        <div id="display-items-cont">
          {props.isDataReady ? (
            props.displayData.map((champ) => {
              return (
                <Card
                  img={Utils.createImgLink(champ.image.full)}
                  k={champ.key}
                  price={champ.price}
                  name={champ.id}
                  quant={champ.quantity}
                  increaseQuant={props.increaseQuant}
                  decreaseQuant={props.decreaseQuant}
                />
              );
            })
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filter;
