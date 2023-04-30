import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = { filter: `` };

const filtersSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setStatusFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
