function RecipeItem(props) {
  const {recipe} = props;

  const itemStyles = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={itemStyles}>
      <span>{recipe.name}</span>
      <span>Category: {recipe.category}</span>
    </div>
  );
}

export default RecipeItem;
