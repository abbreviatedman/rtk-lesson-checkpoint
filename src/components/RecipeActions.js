function RecipeActions() {
  function handleSort(event) {
  }

  return (
    <div>
      <select onChange={handleSort}>
        <option value="name">Sort by Name</option>
        <option value="category">Sort by Category</option>
      </select>

      <div>
        <h3>Filter by Category:</h3>
        {categories.map((category) => (
          <button key={category}>{category}</button>
        ))}
      </div>
    </div>
  );
}

export default RecipeActions;
