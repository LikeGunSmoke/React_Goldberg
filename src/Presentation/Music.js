import React, { Component, useRef, useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import styled from 'styled-components';
import { HiCubeTransparent } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Drum from '../Drum.js';
import Cymbal from '../Cymbal.js';
import Guitar from '../Guitar.js';

import slide from '../../assets/slide.jpeg';

extend({ OrbitControls });

const OControls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
    // takes camera and dom element
    ref={orbitRef}
    args={[camera, gl.domElement]}
    />
  )
}
const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]} receiveShadow >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshPhysicalMaterial attach='material' color='grey' />
    </mesh>
  )
}

const Music = () => {

  const [how, setHow] = useState(false);

  useEffect(() => {
    document.body.style = 'background: grey';
  });

  return (
    <>
    <Canvas style={{height: '65vh', width: '100vw'}} pixelRatio={[1, 2]} camera={{position: [0, 0, 5]}} >
    <color attach='background' args={['lightblue']} />
      <OControls />
      <Plane />
      <ambientLight intensity={0.3}/>
      <pointLight position={[0,0,0]} />
      <Suspense fallback={null}>
        <Guitar position={[-25,10,-15]} scale={[5, 5, 5]}/>
        <Drum position={[0,0,0]} scale={[0.2, 0.2, 0.2]}/>
        <Cymbal position={[-15,15,25]} scale={[80, 80, 80]}/>
      </Suspense>
    </Canvas>
    {!how ?
         <BtnCont>
          <Btn
          type='submit'
          value='Submit'
          onClick={() => setHow(!how)}
          ><HiCubeTransparent style={{height: '40px', width: '40px'}}/><br></br>So How Does it Work?</Btn>
          </BtnCont>
         : <Cont>
             <Par>
              Canvas <br></br>

                OControls <br></br>
                Plane <br></br>
                ambientLight intensity=0.3 <br></br>
                pointLight args=[0,0,0]<br></br>
                Suspense fallback=null<br></br>
                   Guitar position=[-25,10,-15] scale=[5, 5, 5]/><br></br>
                   Drum position=[0,0,0]} scale=[0.2, 0.2, 0.2]/><br></br>
                   Cymbal position=[-15,15,25] scale=[80, 80, 80]/><br></br>
                Suspense<br></br>
               Canvas
            </Par>
           <IoIosCloseCircleOutline style={{height: '25px', width: '25px', borderRadius: '50%', backgroundColor: 'white'}}
           type='submit' value='Submit' onClick={() => setHow(!how)}/>
           </Cont>
        }
    </>
    )
}
{/* <button type='submit' value='Submit' onClick={() => setHow(!how)}></button> */}
const Par = styled.p`
 font-family: Arial, avenier;
 text-align: center;
 color: white;
 font-size: 1em;
`
const Cont = styled.div`
  border: 2px solid black;
  background-image: url(${slide});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const Btn = styled.button`
  position: relative;
  margin-top: 5%;
  height: 100px;
  width: 200px;
  border: 2px solid black;
  border-radius: 10%;
  background-color: crimson;
  color: white;
  ${Btn}:hover {
    transform: scale(1.1);
    text-decoration: underline;
    box-shadow: 5px 5px 2px 5px red;
  }
`;
const BtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: grey;
`;

export default Music;