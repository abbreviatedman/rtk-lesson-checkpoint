import { configureStore } from "@reduxjs/toolkit";
import preferencesReducer from './slices/preferencesSlice'
import recipesReducer from './slices/recipesSlice';

const store = configureStore({
    reducer: {
        preferences: preferencesReducer,
        recipes: recipesReducer,
    }
});

export default store;