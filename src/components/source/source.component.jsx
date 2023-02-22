import { useSelector } from 'react-redux';

// selector import
import { selectSourceUrls } from '../../store/word/word.selector';

// import style
import {
  SourceContainer,
  SourceHeading,
  SourceUrl,
  NewWindowIcon,
} from './source.styles';

function Source() {
  const sourceUrls = useSelector(selectSourceUrls);
  return (
    <SourceContainer>
      <SourceHeading>Source</SourceHeading>
      <div>
        {sourceUrls.map((url, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <SourceUrl key={index}>
            <a href={url} rel="noreferrer" target="_blank">
              {url}
              <NewWindowIcon />
            </a>
          </SourceUrl>
        ))}
      </div>
    </SourceContainer>
  );
}

export default Source;
