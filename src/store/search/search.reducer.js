import { createSlice } from '@reduxjs/toolkit';

const SEARCH_INITIAL_VALUE = {
  searchQuery: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: SEARCH_INITIAL_VALUE,
  reducers: {
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearch } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
