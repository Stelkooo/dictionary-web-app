import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// word actions
import { setWord } from '../../store/word/word.reducer';

// fetch data
import { fetchDictApi } from '../../utils/dictionary/dictionary.utils';

function Main() {
  const dispatch = useDispatch();

  const [json, setJson] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const wordObj = await fetchDictApi();
      setJson(wordObj);
      dispatch(setWord(wordObj));
    };
    fetchData();
  }, [dispatch]);

  return <div>{JSON.stringify(json)}</div>;
}

export default Main;
