import { useSelector } from 'react-redux';

// word selector
import { selectWord, selectPhonetic } from '../../store/word/word.selector';

// import style
import {
  WordContainer,
  WordPhoneticsContainer,
  WordName,
  Phonetic,
} from './word.styles';

function Word() {
  const word = useSelector(selectWord);
  const phonetic = useSelector(selectPhonetic);

  return (
    <WordContainer>
      <WordPhoneticsContainer>
        <WordName>{word}</WordName>
        <Phonetic>{phonetic}</Phonetic>
      </WordPhoneticsContainer>
      <div className="audio-container">
        <p>audio</p>
      </div>
    </WordContainer>
  );
}

export default Word;
