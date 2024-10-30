import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = [
    {
        id: '1',
        name: 'Spaghetti Bolognese',
        ingredients: ['spaghetti', 'minced beef', 'onion', 'garlic', 'tomato sauce', 'olive oil', 'carrot'],
        category: 'Italian'
    },
    {
        id: '2',
        name: 'Chicken Curry',
        ingredients: ['chicken', 'curry powder', 'onion', 'garlic', 'coconut milk', 'ginger', 'tomato'],
        category: 'Indian'
    },
    {
        id: '3',
        name: 'Caesar Salad',
        ingredients: ['romaine lettuce', 'croutons', 'parmesan cheese', 'chicken breast', 'caesar dressing', 'lemon'],
        category: 'Salad'
    },
];


const recipesSlice = createSlice({
    name: 'recipes',
    initialState: initialState,
    reducers: {
        addRecipe: function (state, action) {
            state.push(action.payload);
        },

        updateRecipe: function (state, action) {
            // find the index at which the recipe with that id exists
            const i = state.findIndex((recipe) => recipe.id === action.payload.id);
            // change the recipe value at that index to the action.payload
            state[i] = action.payload;
        },

        deleteRecipe: function (state, action) {
            return state.filter((recipe) => recipe.id !== action.payload.id);
        }
    }
})

export const {addRecipe, updateRecipe, deleteRecipe} = recipesSlice.actions;
export default recipesSlice.reducer;