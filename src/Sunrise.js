import React, { useState } from 'react';
import {  useSpring, a, config } from 'react-spring';
import useSound from 'use-sound';
// import 'regenerator-runtime/runtime; // allows spring to run async

import rooster from '../assets/sounds/rooster.mp3';

const Sunrise = (phase) => {
  const [sun, setSun] = useState(true);
  const [playOn] = useSound(rooster, {volume: 0.25});

  // rising sun
  // const rise = useSpring({
  //   to: [{height: '50px', width: '50px', borderRadius: '50%', backgroundColor: 'yellow'}, sun ? {transform: 'translate(225px, -60px'} : {transform: 'translate(10px, 750px)'}, {boxShadow: '0 0 30px 30px yellow, 0 0 100px 60px orange'}, {config: {friction: 75}}],
  //   from: {transform: 'translate(10px, 750px)'}
  // })

  // fade in
  const rise = useSpring({
    to: [{height: '50px', width: '50px', borderRadius: '50%', backgroundColor: 'yellow', zIndex: '99'}, sun ? {opacity: 0} : {opacity: 1}, {boxShadow: '0 0 30px 30px yellow, 0 0 100px 60px orange'}, {config: {friction: '75'}}],
    from: {position: 'absolute', top: '40px', left: '40px', zIndex: '99'}
  })

  // const rise = useSpring({
  //   to: [{height: '50px', width: '50px', borderRadius: '50%', {backgroundColor: sun ? 'yellow' : 'orange'}, zIndex: '99'}, sun ? {opacity: 0} : {opacity: 1}, {boxShadow: '0 0 30px 30px yellow, 0 0 100px 60px orange'}, {config: {friction: '75'}}],
  //   from: {position: 'absolute', top: '40px', left: '40px', zIndex: '99'}
  // })


  return (
    <>
    <a.div style={rise}>
    </a.div>
    <div style={{zIndex: '2', position: 'absolute', top: '150px', left: '75px'}}>
      <button
      type='submit'
      value='Submit'
      onClick={() => playOn() + setSun(!sun)}
      >RISE!</button>
      </div>
     </>
  )
}

export default Sunrise;