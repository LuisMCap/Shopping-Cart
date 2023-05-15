import MiscCont from "./MiscCont"
import Filter from './Filter'

const DisplayItems = (props) => {
    return (
      <div id="search-comp">
        <MiscCont img={props.img} selectedCategory={props.selectedCategory} />
        <Filter
          filterBoxesCategory={props.filterBoxesCategory}
          champData={props.champData}
          isDataReady={props.isDataReady}
          increaseQuant={props.increaseQuant}
          decreaseQuant={props.decreaseQuant}
        />
      </div>
    );
}

export default DisplayItems;