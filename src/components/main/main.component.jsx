import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// word actions
import { setWord } from '../../store/word/word.reducer';

// fetch data
import { fetchDictApi } from '../../utils/dictionary/dictionary.utils';

// component import
import Word from '../word/word.component';
import Meanings from '../meanings/meanings.component';
import Source from '../source/source.component';

function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const wordObj = await fetchDictApi();
      dispatch(setWord(wordObj));
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Word />
      <Meanings />
      <Source />
    </div>
  );
}

export default Main;
