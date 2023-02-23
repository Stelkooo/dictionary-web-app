import styled from 'styled-components';

import { ReactComponent as NewWindowSvg } from '../../assets/images/icon-new-window.svg';

export const SourceContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.bodySmall};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    gap: ${20 / 16}rem;
  }
`;

export const SourceHeading = styled.p`
  color: ${({ theme }) => theme.colours.black300};
  margin-bottom: ${8 / 16}rem;
  text-decoration: underline;
`;

export const SourceUrl = styled.p``;

export const NewWindowIcon = styled(NewWindowSvg)`
  margin-left: ${9 / 16}rem;
  width: 12px;
  height: 12px;
`;
