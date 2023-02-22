// style import
import {
  SearchBarContainer,
  SearchBarInput,
  SearchIcon,
} from './search-bar.styles';

function SearchBar() {
  return (
    <SearchBarContainer>
      <SearchBarInput type="text" placeholder="Search for any word..." />
      <SearchIcon />
    </SearchBarContainer>
  );
}

export default SearchBar;
