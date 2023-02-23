import styled from 'styled-components';

export const NotFoundContainer = styled.div`
  margin-top: ${132 / 16}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Emoji = styled.span`
  margin-bottom: ${44 / 16}rem;
  font-size: ${({ theme }) => theme.fontSizes.headingLarge};
`;

export const NotFoundHeading = styled.h3`
  margin-bottom: ${24 / 16}rem;
  font-size: ${({ theme }) => theme.fontSizes.headingSmall};
`;

export const NotFoundPara = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.bodyMedium};
  color: ${({ theme }) => theme.colours.black300};
`;
