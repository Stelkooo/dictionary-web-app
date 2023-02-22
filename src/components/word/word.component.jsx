import { useSelector } from 'react-redux';

// word selector
import { selectWord, selectPhonetic } from '../../store/word/word.selector';

// component import
import Audio from '../audio/audio.component';

// import style
import {
  WordContainer,
  WordPhoneticsContainer,
  WordName,
  Phonetic,
} from './word.styles';

function Word() {
  const word = useSelector(selectWord);
  const phonetic = useSelector(selectPhonetic) || null;

  return (
    <WordContainer>
      <WordPhoneticsContainer>
        <WordName>{word}</WordName>
        <Phonetic>{phonetic}</Phonetic>
      </WordPhoneticsContainer>
      <Audio />
    </WordContainer>
  );
}

export default Word;
