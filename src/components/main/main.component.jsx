import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// word actions
import { setWord } from '../../store/word/word.reducer';

// selectors
import { selectSearchQuery } from '../../store/search/search.selector';
import { selectWord } from '../../store/word/word.selector';

// fetch data
import { fetchDictApi } from '../../utils/dictionary/dictionary.utils';

// component import
import Word from '../word/word.component';
import Meanings from '../meanings/meanings.component';
import Source from '../source/source.component';
import NotFound from '../not-found/not-found.component';

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
  const word = useSelector(selectWord);
  const debounceValue = useDebounceValue(searchQuery);

  useEffect(() => {
    if (debounceValue) {
      const fetchData = async () => {
        const wordObj = await fetchDictApi(debounceValue);
        if (wordObj) {
          dispatch(setWord(wordObj));
        } else {
          dispatch(setWord({}));
        }
      };
      fetchData();
    }
  }, [dispatch, debounceValue]);

  return word ? (
    <div>
      <Word />
      <Meanings />
      <Source />
    </div>
  ) : (
    <NotFound />
  );
}

export default Main;
