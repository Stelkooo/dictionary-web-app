import { createSelector } from '@reduxjs/toolkit';

const selectSearchReducer = (state) => state.search;

export const selectSearchQuery = createSelector(
  [selectSearchReducer],
  (search) => search.searchQuery
);

export default selectSearchQuery;
