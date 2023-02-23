import styled from 'styled-components';

// svg import
import { ReactComponent as MoonSvg } from '../../assets/images/icon-moon.svg';

export const DarkModeContainer = styled.div`
  display: flex;
  gap: ${12 / 16}rem;
`;

export const Switch = styled.label`
  margin: 0 auto;
  display: block;
  height: 20px;
  position: relative;
  width: 40px;
  & input {
    display: none;
  }
`;

export const Slider = styled.div`
  background-color: ${({ theme }) => theme.colours.black300};
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
  border-radius: 10px;

  &:before {
    background-color: ${({ theme }) => theme.colours.white};
    bottom: 3px;
    content: '';
    height: 14px;
    left: 4px;
    position: absolute;
    transition: 0.4s;
    width: 14px;
    border-radius: 50%;
  }
`;

export const MoonIcon = styled(MoonSvg)`
  & path {
    stroke: ${(props) => props.stroke};
  }
`;

export const Checkbox = styled.input`
  &:checked + ${Slider} {
    background-color: ${({ theme }) => theme.colours.purple};
  }

  &:checked + ${Slider}:before {
    transform: translateX(18px);
  }
`;
