import { useSelector } from 'react-redux';

// word selector
import {
  selectWord,
  selectPhonetic,
  selectAudioUrl,
} from '../../store/word/word.selector';

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
  const phonetic = useSelector(selectPhonetic);
  const audio = useSelector(selectAudioUrl);

  return (
    <WordContainer>
      <WordPhoneticsContainer>
        <WordName>{word}</WordName>
        {phonetic && <Phonetic>{phonetic}</Phonetic>}
      </WordPhoneticsContainer>
      {audio && <Audio />}
    </WordContainer>
  );
}

export default Word;
