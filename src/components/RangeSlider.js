import React, { useState, useEffect } from 'react';

function RangeSlider(props) {

  return (
    <div>
      <input type="range" min='0' 
            max="1" step='0.01' 
            value={props.parentState} 
            className='slider' id="myRange" 
            onChange={(e)=> {
              props.parentStateSetter(Number(e.target.value))
            }}/>
    </div>
  );
}

export default RangeSlider;