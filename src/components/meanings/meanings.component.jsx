import { useSelector } from 'react-redux';

// meanings selector
import { selectMeanings } from '../../store/word/word.selector';

// components import
import PartOfSpeech from '../part-of-speech/part-of-speech.component';
import SeparatorLine from '../separator-line/separator-line.component';

// styles import
import { MeaningsContainer } from './meanings.styles';

function Meanings() {
  const meanings = useSelector(selectMeanings);

  return (
    <MeaningsContainer>
      {meanings.map((meaning) => (
        <PartOfSpeech key={meaning.partOfSpeech} meaning={meaning} />
      ))}
      <SeparatorLine />
    </MeaningsContainer>
  );
}

export default Meanings;
