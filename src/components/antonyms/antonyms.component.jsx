import { PropTypes } from 'prop-types';

// style import
import { AntonymsContainer, Title, List } from './antonyms.styles';

function Antonyms({ antonyms }) {
  return (
    <AntonymsContainer>
      <Title>Antonyms</Title>
      <List>{antonyms.join(' ')}</List>
    </AntonymsContainer>
  );
}

Antonyms.propTypes = {
  antonyms: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Antonyms;
