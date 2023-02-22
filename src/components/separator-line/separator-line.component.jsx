import { PropTypes } from 'prop-types';

// import style
import { Line } from './separator-line.styles';

function SeparatorLine({ isVertical }) {
  return <Line $isVertical={isVertical} />;
}

SeparatorLine.defaultProps = {
  isVertical: false,
};

SeparatorLine.propTypes = {
  isVertical: PropTypes.bool,
};

export default SeparatorLine;
