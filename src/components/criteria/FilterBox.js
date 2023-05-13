import CategoryBox from "./categoryBox";

const FilterBox = () => {
    return (
      <div className="filter-box-comp">
        <span className="line"></span>
        <div className="title-cont">
          <div className="title-category">Hola</div>
        </div>
        <div className="categories-cont">
          <CategoryBox />
        </div>
      </div>
    );
}

export default FilterBox