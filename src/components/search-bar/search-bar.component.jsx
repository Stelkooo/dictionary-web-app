import { useSelector, useDispatch } from 'react-redux';

// import actions
import { setSearch } from '../../store/search/search.reducer';

// import selector
import {
  selectSearchQuery,
  selectHasUserSearched,
} from '../../store/search/search.selector';

// style import
import {
  SearchBarContainer,
  SearchBarInput,
  SearchIcon,
  Error,
} from './search-bar.styles';

function SearchBar() {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectSearchQuery);
  const hasUserSearched = useSelector(selectHasUserSearched);

  const onChangeHandler = (value) => {
    dispatch(setSearch(value));
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        $displayError={!searchValue && hasUserSearched}
        type="text"
        placeholder="Search for any word..."
        value={searchValue}
        onChange={(e) => onChangeHandler(e.currentTarget.value)}
      />
      {!searchValue && hasUserSearched ? (
        <Error>Whoops, can&apos;t be empty...</Error>
      ) : null}
      <SearchIcon />
    </SearchBarContainer>
  );
}

export default SearchBar;
