import { PropTypes } from 'prop-types';

// component import
import SeparatorLine from '../separator-line/separator-line.component';
import Definitions from '../definitions/definitions.component';
import Synonyms from '../synonyms/synonyms.component';
import Antonyms from '../antonyms/antonyms.component';

// style import
import {
  PartOfSpeechContainer,
  PartOfSpeechHeading,
  Speech,
  Meaning,
} from './part-of-speech.styles';

function PartOfSpeech({
  meaning: { partOfSpeech, definitions, synonyms, antonyms },
}) {
  return (
    <PartOfSpeechContainer>
      <PartOfSpeechHeading>
        <Speech>{partOfSpeech}</Speech>
        <SeparatorLine />
      </PartOfSpeechHeading>
      <Meaning>
        <p>Meaning</p>
        <Definitions definitions={definitions} />
        {synonyms.length ? <Synonyms synonyms={synonyms} /> : null}
        {antonyms.length ? <Antonyms antonyms={antonyms} /> : null}
      </Meaning>
    </PartOfSpeechContainer>
  );
}

PartOfSpeech.propTypes = {
  meaning: PropTypes.shape({
    partOfSpeech: PropTypes.string.isRequired,
    definitions: PropTypes.arrayOf([]).isRequired,
    synonyms: PropTypes.arrayOf([]).isRequired,
    antonyms: PropTypes.arrayOf([]).isRequired,
  }).isRequired,
};

export default PartOfSpeech;
