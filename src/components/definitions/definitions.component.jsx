import { PropTypes } from 'prop-types';

// style import
import {
  DefinitionsContainer,
  DefinitionsList,
  Definition,
  Example,
} from './definitions.styles';

function Definitions({ definitions }) {
  return (
    <DefinitionsContainer>
      <DefinitionsList>
        {definitions.map(({ definition, example }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Definition key={index}>
            <p>{definition}</p>
            {example ? <Example>{example}</Example> : null}
          </Definition>
        ))}
      </DefinitionsList>
    </DefinitionsContainer>
  );
}

Definitions.propTypes = {
  definitions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};

export default Definitions;
