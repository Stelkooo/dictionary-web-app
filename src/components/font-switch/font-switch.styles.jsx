import styled from 'styled-components';

export const FontsContainer = styled.div`
  position: relative;
`;

export const FontSwitchButton = styled.button`
  font-size: ${14 / 16}rem;
  font-weight: 700;
  outline: none;
  background: transparent;
  background-image: url('/assets/images/icon-arrow-down.svg');
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: center;
  border: none;
  padding-right: calc(18px + 14px);
  margin-right: 1rem;
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    font-size: ${18 / 16}rem;
  }
`;

export const FontList = styled.div`
  background-color: white;
  display: ${(props) => props.display};
  flex-direction: column;
  width: ${183 / 16}rem;
  border-radius: 1rem;
  position: absolute;
  z-index: 100;
  padding: 24px;
  right: 1rem;
  top: 2rem;
  box-shadow: 0px 5px 30px 0px rgba(0, 0, 0, 10%);
`;

export const FontListOption = styled.button`
  text-align: start;
  font-family: ${(props) => props.fontOption};
  font-size: ${14 / 16}rem;
  font-weight: 700;
  outline: none;
  border: none;
  background: transparent;

  &:hover {
    cursor: pointer;
    color: #a445ed;
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    font-size: ${18 / 16}rem;
  }
`;
