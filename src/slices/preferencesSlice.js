import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    units: 'metric',
    view: 'list',
}

const preferencesSlice = createSlice({
    name: 'preferences',
    initialState: initialState,
    reducers: {
        toggleUnits: function (state) {
            state.units = state.units === 'metric' ? 'imperial' : 'metric';
        },

        toggleView: function(state) {
            state.view = state.view === 'list' ? 'grid' : 'list';
        }
    }
})

export const {toggleUnits, toggleView} = preferencesSlice.actions;
export default preferencesSlice.reducer;