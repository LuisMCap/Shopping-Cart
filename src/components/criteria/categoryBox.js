const CategoryBox = (props) => {
    return (
      <div className="category-cont">
        <input type="checkbox" id={props.category} name="checkbox" value="1" />
        <label for={props.category}> {props.category}</label>
      </div>
    );
}

export default  CategoryBox