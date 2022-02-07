import React from 'react';

function Pad(props) {
  const playSound = () => {
    const audioTag = document.getElementById(`${props.letterMark}`);
    audioTag.currentTime = 0;
    audioTag.volume = props.volume;
    audioTag.play();
    props.setDisplay(props.source);
  }

  return (
    <div className='drum-pad' id={`${props.id}`} onClick={playSound}>
      <audio id={props.letterMark } className='clip' src={`./audio-kit/${props.source}.wav`}>
      </audio>
      <span className='edge'></span>
      <span className='front'>
        {props.letterMark}
      </span>
    </div>
  );
}

export default Pad;
