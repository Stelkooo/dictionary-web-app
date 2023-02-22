import { PropTypes } from 'prop-types';

// style import
import { SynonymsContainer, Title, List } from './synonyms.styles';

function Synonyms({ synonyms }) {
  return (
    <SynonymsContainer>
      <Title>Synonyms</Title>
      <List>{synonyms.join(' ')}</List>
    </SynonymsContainer>
  );
}

Synonyms.propTypes = {
  synonyms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Synonyms;
