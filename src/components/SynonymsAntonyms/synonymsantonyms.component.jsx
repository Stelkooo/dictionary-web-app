import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';

// action import
import { setSearch } from '../../store/search/search.reducer';

// style import
import { Container, Title, List } from './synonymsantonyms.styles';

function SynonymsAntonyms({ array, title }) {
  const dispatch = useDispatch();

  const onClickHandler = (value) => {
    dispatch(setSearch(value));
  };

  const uniqueArr = [...new Set(array)];
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {uniqueArr.map((synonym) => (
          <button
            type="button"
            key={synonym}
            onClick={() => onClickHandler(synonym)}
          >
            {synonym}
          </button>
        ))}
      </List>
    </Container>
  );
}

SynonymsAntonyms.propTypes = {
  array: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
};

export default SynonymsAntonyms;
