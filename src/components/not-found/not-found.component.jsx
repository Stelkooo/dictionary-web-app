import {
  NotFoundContainer,
  Emoji,
  NotFoundHeading,
  NotFoundPara,
} from './not-found.styles';

function NotFound() {
  return (
    <NotFoundContainer>
      <Emoji>😕</Emoji>
      <NotFoundHeading>No Definitions Found</NotFoundHeading>
      <NotFoundPara>
        Sorry pal, we couldn&apos;t find definitions for the word you were
        looking for. You can try the search again at later time or head to the
        web instead.
      </NotFoundPara>
    </NotFoundContainer>
  );
}

export default NotFound;
