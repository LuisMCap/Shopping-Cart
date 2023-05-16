const CategoryBox = (props) => {
  return (
    <div className="category-cont" key={props.category}>
      <input
        type="checkbox"
        id={props.category}
        name="checkbox"
        value="1"
        onChange={(e) => {props.updateFilterChamp(e, props.category)}}
      />
      <label htmlFor={props.category}> {props.category}</label>
      <div>{props.active}</div>
    </div>
  );
};

export default CategoryBox;
