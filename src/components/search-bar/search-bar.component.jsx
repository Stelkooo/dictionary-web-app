import { useSelector, useDispatch } from 'react-redux';

// import actions
import { setSearch } from '../../store/search/search.reducer';

// import selector
import { selectSearchQuery } from '../../store/search/search.selector';

// style import
import {
  SearchBarContainer,
  SearchBarInput,
  SearchIcon,
} from './search-bar.styles';

function SearchBar() {
  const dispatch = useDispatch();

  const searchValue = useSelector(selectSearchQuery);

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        placeholder="Search for any word..."
        value={searchValue}
        onChange={(e) => dispatch(setSearch(e.currentTarget.value))}
      />
      <SearchIcon />
    </SearchBarContainer>
  );
}

export default SearchBar;
