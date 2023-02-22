import styled from 'styled-components';

import { ReactComponent as PlaySvg } from '../../assets/images/icon-play.svg';

export const AudioButton = styled.button`
  width: ${48 / 16}rem;
  height: ${48 / 16}rem;
  border: none;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
`;

export const AudioIcon = styled(PlaySvg)`
  width: ${48 / 16}rem;
  height: ${48 / 16}rem;
  & circle {
    opacity: ${(props) => (props.$audioPlaying ? 1 : 0.25)};
  }
  & path {
    fill: ${(props) => (props.$audioPlaying ? 'white' : '#a445ed')};
  }
  &:hover {
    & circle {
      opacity: 1;
    }
    & path {
      fill: white;
    }
  }
`;

export default AudioIcon;
