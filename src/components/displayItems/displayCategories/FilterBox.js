import CategoryBox from "./categoryBox";

const FilterBox = (props) => {
    return (
      <div className="filter-box-comp" key={props.name}>
        <span className="line"></span>
        <div className="title-cont">
          <div className="title-category">{props.name}</div>
        </div>
        <div className="categories-cont">
          {props.category.map(cat=>{
            return (
              <CategoryBox
                category={cat.category}
                active={cat.active}
                updateFilterChamp={props.updateFilterChamp}
              />
            );
          })}
        </div>
      </div>
    );
}

export default FilterBox