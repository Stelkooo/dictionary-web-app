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
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${75 / 16}rem;
    height: ${75 / 16}rem;
  }
`;

export const AudioIcon = styled(PlaySvg)`
  width: ${48 / 16}rem;
  height: ${48 / 16}rem;
  & circle {
    opacity: ${(props) => (props.$audioPlaying ? 1 : 0.25)};
  }
  & path {
    fill: ${(props) =>
      props.$audioPlaying
        ? props.theme.colours.white
        : props.theme.colours.purple};
  }
  &:hover {
    & circle {
      opacity: 1;
    }
    & path {
      fill: ${({ theme }) => theme.colours.white};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: ${75 / 16}rem;
    height: ${75 / 16}rem;
  }
`;

export default AudioIcon;
