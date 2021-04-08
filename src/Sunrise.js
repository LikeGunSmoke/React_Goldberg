import React, { useState } from 'react';
import {  useSpring, a } from 'react-spring';
import { Canvas, useFrame, extend, useThree, useUpdate } from
'react-three-fiber';
import useSound from 'use-sound';


import rooster from '../assets/sounds/rooster.mp3';

const Sunrise = () => {
  const [sun, setSun] = useState(false);
 // const [isOn, setOn] = useState(false); // use this to toggle sound
  const [playOn] = useSound(rooster, {volume: 0.5});

  const rise = useSpring({
    to: [{height: '50px', width: '50px', borderRadius: '50%'}, sun ? {transform: 'translate(225px, -60px'} : {transform: 'translate(10px, 750px)'}, {boxShadow: '0 0 50px 50px yellow, 0 0 100px 60px orange'}, {config: {friction: 75}}],
    from: {transform: 'translate(10px, 750px)'}
  })

  return (
    <a.div style={rise}>
      <button type='submit' value='Submit'
      onClick={() => playOn() + setSun(!sun)}
      >RISE!</button>
    </a.div>
  )
}

export default Sunrise;

