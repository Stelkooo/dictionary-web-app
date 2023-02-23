import { PropTypes } from 'prop-types';

// component import
import SeparatorLine from '../separator-line/separator-line.component';
import Definitions from '../definitions/definitions.component';
import SynonymsAntonyms from '../SynonymsAntonyms/synonymsantonyms.component';

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
        {synonyms.length ? (
          <SynonymsAntonyms array={synonyms} title="Synonyms" />
        ) : null}
        {antonyms.length ? (
          <SynonymsAntonyms array={antonyms} title="Antonyms" />
        ) : null}
      </Meaning>
    </PartOfSpeechContainer>
  );
}

PartOfSpeech.propTypes = {
  meaning: PropTypes.shape({
    partOfSpeech: PropTypes.string.isRequired,
    definitions: PropTypes.arrayOf(PropTypes.object).isRequired,
    synonyms: PropTypes.arrayOf(PropTypes.string).isRequired,
    antonyms: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PartOfSpeech;
