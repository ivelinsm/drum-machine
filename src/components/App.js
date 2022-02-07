import React, { useEffect, useState } from 'react';
import Display from './Display';
import Pads from './Pads';
import RangeSlider from './RangeSlider';

function App() {

  const audioClips = [{
    keyCode:81,
    keyTrigger: 'Q',
    id: 'Bass'
  },
  {
    keyCode:87,
    keyTrigger: 'W',
    id: 'Clap'
  },
  {
    keyCode:69,
    keyTrigger: 'E',
    id: 'Hi-hat'
  },
  {
    keyCode:65,
    keyTrigger: 'A',
    id: 'Kick-1'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Kick-2'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-hat'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Perc"
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Rim'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare'
  }
]

  const [volume, setVolume] = useState(0.5);
  const [display, setDisplay] = useState('Are you ready to drop the bass?');
  const keyCodeArray = ['Q','W','E','A','S','D','Z','X','C'];

  useEffect(()=>{
    document.addEventListener('keydown', (e)=>{handleKeyPress(e)});
    return document.removeEventListener('keydown', (e)=>{handleKeyPress(e)});
  }, [volume]);

  function handleKeyPress(e){
    let clipName = e.key.toUpperCase();
    if(keyCodeArray.includes(clipName)){
      let sound = document.getElementById(clipName);
      document.getElementById(keyCodeArray.indexOf(clipName)).click();
      sound.volume = volume;
      sound.currentTime = 0;
      sound.play();
      setDisplay(audioClips[(audioClips.findIndex( clip => clip.keyTrigger==clipName))].id)
  }
  }

  return (
    <> 
      <div id="heading">
      <h1 id="title">Drum Machine</h1>
      <h2 id="subtitle">By Ivelin Mitev</h2>
      </div>
      <Display display={display}/>
      <Pads audioClips={audioClips} onClick={handleKeyPress} volume={volume} display={display} setDisplay={setDisplay}/>
      <RangeSlider parentState={volume} parentStateSetter={(e)=> setVolume(Number(e))}/>
    </>
  );
}

export default App;
