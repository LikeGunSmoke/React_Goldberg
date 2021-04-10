import React, { useState } from 'react';
import { useSpring, a } from 'react-spring';
import { IoIosVolumeHigh,  IoIosVolumeOff} from "react-icons/io";
import useSound from 'use-sound';

import eyes from '../assets/wolfEyes.png';
import mouseClick from '../assets/sounds/mouseClick.mp3';

const ScaryEyes = () => {

  const [sound, setSound] = useState(true);
  const [click] = useSound(mouseClick, sound ? {volume: 0.5} : {volume: 0.0});

  return (
    <div>
      <button onClick={() => click()}
      type='submit' value='Submit'>Click Me!</button>
      {/* <button onClick={() => setSound(!sound)}
      type='submit' value='Submit'>{sound ? <IoIosVolumeHigh style={{height: '25px', width: '25px', borderRadius: '50%'}}/> : <IoIosVolumeOff style={{height: '25px', width: '25px', borderRadius: '50%'}}/>}</button> */}
{sound ?
<IoIosVolumeHigh
style={{height: '25px', width: '25px', borderRadius: '50%', backgroundColor: 'white'}}
onClick={() => setSound(!sound)}
/>
:
<IoIosVolumeOff
style={{height: '25px', width: '25px', borderRadius: '50%', backgroundColor: 'white'}}
onClick={() => setSound(!sound)}
/>
}
    </div>
  )
}

export default ScaryEyes;