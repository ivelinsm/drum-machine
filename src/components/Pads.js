import React from 'react';

import Pad from './Pad';

function Pads({onClick, volume, audioClips, setDisplay}) {

  return (
    <div id="drum-pads">
        {audioClips.map((clip, index)=>{
         return <Pad letterMark={clip.keyTrigger}
                source={clip.id}
                key={index}
                id={index}
                onClick={onClick}
                volume={volume}
                setDisplay={setDisplay} />
        })}
    </div>
  );
}

export default Pads;