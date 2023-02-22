import { useState } from 'react';

import { useSelector } from 'react-redux';

import { selectAudioUrl } from '../../store/word/word.selector';

// style import
import { AudioButton, AudioIcon } from './audio.styles';

function Audio() {
  const [audioPlaying, setAudioPlaying] = useState(false);
  const audio = useSelector(selectAudioUrl);

  const handleAudio = () => {
    setAudioPlaying(true);
    audio.play();
  };

  audio.onended = () => {
    setAudioPlaying(false);
  };

  return (
    <AudioButton type="button" onClick={() => handleAudio()}>
      <AudioIcon $audioPlaying={audioPlaying} />
    </AudioButton>
  );
}

export default Audio;
