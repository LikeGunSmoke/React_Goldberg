import React, { useState } from 'react';
import {  useSpring, a } from 'react-spring';
import { Canvas, useFrame, extend, useThree, useUpdate } from
'react-three-fiber';
import useSound from 'use-sound';


import howl from '../assets/sounds/howl.mp3';

const Moonrise = () => {
  const [moon, setMoon] = useState(false);
  const [isOn, setOn] = useState(false);
  const [playOn] = useSound(howl, {volume: 0.5});

  const rise = useSpring({
    to: [{height: '250px', width: '250px', borderRadius: '50%'}, moon ? {transform: 'translate(225px, -60px'} : {transform: 'translate(10px, 750px)'}, {boxShadow: '0 0 50px 50px lightblue'}, {config: {friction: 75}}],
    from: {transform: 'translate(10px, 750px)'}
  })

  return (
    <a.div style={rise}>
     <img src='http://localhost:3000/api/moon.png' alt='moon' style={{width: '250px', height: '250px', backgroundColor: 'lightblue', borderRadius: '50%'}} alt='moon' />
      <button type='submit' value='Submit'
      onClick={() => playOn() + setMoon(!moon)}
      >RISE!</button>
    </a.div>
  )
}

export default Moonrise;

