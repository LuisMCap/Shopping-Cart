import Utils from "../../utils/utils";
import CategoryBox from "./categoryBox";

const FilterBox = (props) => {
    return (
      <div className="filter-box-comp">
        <span className="line"></span>
        <div className="title-cont">
          <div className="title-category">{props.name}</div>
        </div>
        <div className="categories-cont">
          {props.category.map(cat=>{
            return <CategoryBox category={cat}/>
          })}
        </div>
      </div>
    );
}

export default FilterBox