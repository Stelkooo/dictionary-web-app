import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// word actions
import { setWord } from '../../store/word/word.reducer';

// search selector
import { selectSearchQuery } from '../../store/search/search.selector';

// fetch data
import { fetchDictApi } from '../../utils/dictionary/dictionary.utils';

// component import
import Word from '../word/word.component';
import Meanings from '../meanings/meanings.component';
import Source from '../source/source.component';

function useDebounceValue(value) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [value]);

  return debounceValue;
}

function Main() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(selectSearchQuery);
  const debounceValue = useDebounceValue(searchQuery);

  useEffect(() => {
    if (debounceValue) {
      const fetchData = async () => {
        const wordObj = await fetchDictApi(debounceValue);
        dispatch(setWord(wordObj));
      };
      fetchData();
    }
  }, [dispatch, debounceValue]);

  return debounceValue ? (
    <div>
      <Word />
      <Meanings />
      <Source />
    </div>
  ) : null;
}

export default Main;
