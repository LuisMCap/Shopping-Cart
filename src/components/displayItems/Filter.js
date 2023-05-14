import FilterBox from "./displayCategories/FilterBox"

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
          <div id="display-items-cont"></div>
        </div>
      </div>
    );
}

export default Filter