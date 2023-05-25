import MiscCont from "./MiscCont";
import Filter from "./Filter";

const DisplayItems = (props) => {

  return (
    <div id="search-comp">
      <MiscCont
        img={props.img}
        selectedCategory={props.selectedCategory}
        totalQuant={props.totalQuant}
        displayedQuant={props.displayedQuant}
      />
      <Filter
        filterBoxesCategory={props.filterBoxesCategory}
        champData={props.champData}
        displayData={props.displayData}
        isDataReady={props.isDataReady}
        increaseQuant={props.increaseQuant}
        decreaseQuant={props.decreaseQuant}
        updateFilterChamp={props.updateFilterChamp}
      />
    </div>
  );
};

export default DisplayItems;
