import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteRecipe, updateRecipe } from "../slices/recipesSlice";

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => {
    return state.recipes.find((recipe) => recipe.id === id)
  })

  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(recipe.name);
  const [ingredients, setIngredients] = useState(recipe.ingredients);

  function handleSave() {
    dispatch(updateRecipe({id: id, name: name, ingredients: ingredients}))
    setEditing(false);
  }

  function handleDelete() {
    dispatch(deleteRecipe(recipe))
    navigate('/');
  }

  function handleAddIngredient() {
    setIngredients([...ingredients, ''])
  }

  function handleIngredientChange(index, value) {
    const newIngredients = [...ingredients]
    newIngredients[index] = value;
    setIngredients(newIngredients);
  }

  return (
    <div>
      {editing ? (
        <div>
          <input value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={handleAddIngredient}>Add Ingredient</button>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
            />
          ))}

          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default RecipeDetail;
