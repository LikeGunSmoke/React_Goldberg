import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {  useSpring, a } from 'react-spring';
import useSound from 'use-sound';

import fullMoon from '../assets/moon.png';
import howl from '../assets/sounds/howl.mp3';
import rooster from '../assets/sounds/rooster.mp3';

// import 'regenerator-runtime/runtime'; // allows spring to run async

const Moonrise = ({ phase }) => {
   const [moon, setMoon] = useState(true);
  // const [isOn, setOn] = useState(false);


  // const rise = useSpring({
  //   to: [{height: '250px', width: '250px', borderRadius: '50%'}, moon ? {transform: 'translate(225px, -60px'} : {transform: 'translate(10px, 750px)'}, {boxShadow: '0 0 50px 50px lightblue'}, {config: {friction: 75}}],
  //   from: {transform: 'translate(10px, 750px)'}
  // })

  const rise = useSpring({
    to: [{height: '50px', width: '50px', borderRadius: '50%', backgroundColor: 'lightblue', backgroundSize: 'cover', zIndex: '99'}, moon ? {opacity: 1} : {opacity: 0}, {boxShadow: '0 0 50px 40px lightblue'}, {config: {friction: '75'}}],
    from: {position: 'absolute', top: '50px', left: '50px', zIndex: '99'}
  })

  const [playOn, { stop, isPlaying }] = useSound(howl, {volume: 0.5, interrupt: false});
  const [count, setCount] = useState(0);


  // const useAudio = (sound) => {

  //   const [audio] = useState(new Audio(sound));
  //   const [playing, setPlaying] = useState(false);
  //   const [count, setCount] = useState(0);

  //   const toggle = () => setPlaying(!playing);
  //   count > 0 ? audio.pause() : null

  //   useEffect(() => {
  //       playing ? audio.play() : audio.pause();
  //     },
  //     [playing]
  //   );

  //   useEffect(() => {
  //     audio.addEventListener('ended', () => setPlaying(false));
  //     return () => {
  //       audio.removeEventListener('ended', () => setPlaying(false));
  //     };
  //   }, []);

  //   return [playing, toggle];
  // };

  // const [playing, toggle] = useAudio(howl);

 const Audio = (audioFile) => {

   useEffect(() => {
     const sound = document.getElementById("audio")[0];
     audio.play();
   })

   return (
     <div>
       <audio id="audio" >
         <source src={audioFile} />
       </audio>
     </div>
   )
 }

 const [day, setDay] = useState(false)
 const timer = () => {
   setInterval(() => {
     setDay(!day);
   }, 2000)
 };

  return (
    <>

      {day ? <Audio audioFile={howl}/> : null}
      <a.img  src={fullMoon} alt='moon' style={rise} />
      <div style={{zIndex: '2', position: 'absolute', top: '350px', left: '75px'}}>
         <button onClick={() => setInterval(() => {
           setDay(!day);
         }, 2000)}
         type='submit' value='Submit'>RISE</button>
      </div>
    </>
  )
}

export default Moonrise;

