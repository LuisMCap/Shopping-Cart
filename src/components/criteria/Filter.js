import FilterBox from "./FilterBox"

const Filter = (props) => {
    return (
      <div id="filter-comp">
        <div className="page-width" id="filter-cont">
          <div id="filter">
            {props.filterBoxesCategory.map((category) => {
              return (
                <FilterBox name={category.name} category={category.category} />
              );
            })}
          </div>
          <div id="search-cont"></div>
        </div>
      </div>
    );
}

export default Filter