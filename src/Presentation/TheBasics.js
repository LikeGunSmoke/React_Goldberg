import React, { Component, useRef, useState, useEffect } from 'react';
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import styled from 'styled-components';
import { HiCubeTransparent } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Wave } from 'react-animated-text';

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

const TheBasics = () => {

  const [how, setHow] = useState(false);
  const [color, setColor] = useState(false);
  const [scale, setScale] = useState(false);
  const [opac, setOpac] = useState(false);

  const text = [
  `<Canvas style={{height: '65vh', width: '100vw'}} camera={{position: [0,0,5]}} >`,
    `  <color attach='background' args={['lightblue']} />`,
      `  <OControls />`,
      `  <Plane />`,
      `  <mesh onClick={() => setScale(!scale)} onPointerEnter={() => setColor(true) + setOpac(true)} onPointerLeave={() => setColor(false) + setOpac(false)}>`,
        `    <ambientLight intensity={0.5}/>`,
        `    <pointLight position={[0,0,0]} />`,
        `    <boxBufferGeometry attach='geometry'args={scale ? [5, 5, 5] : [1, 1, 1]} />`,
        `  <meshStandardMaterial attach='material' color={color ? 'green' : 'red'} transparent={true} opacity={opac ? 0.25 : 1} />`,
      `  </mesh>`,
    `</Canvas>`
  ]
  //console.log(text.map((t) => console.log(t)));
  return (
    <>
    <Canvas style={{height: '65vh', width: '100vw'}} camera={{position: [0,0,5]}} >
    <color attach='background' args={['lightblue']} />
      <OControls />
      <Plane />
      <mesh
      onClick={() => setScale(!scale)}
      onPointerEnter={() => setColor(true) + setOpac(true)}
      onPointerLeave={() => setColor(false) + setOpac(false)}
      >
        <ambientLight intensity={0.5}/>
        <pointLight position={[0,0,0]} />
        <boxBufferGeometry
        attach='geometry'
        args={scale ? [5, 5, 5] : [1, 1, 1]}
        />
        <meshStandardMaterial
        attach='material'
        color={color ? 'green' : 'red'}
        transparent={true}
        opacity={opac ? 0.25 : 1}
        />
      </mesh>
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
           <Par>{text.map((t, i) => <Wave text={t} iterations={1} speed={20} key={i}/>)}
           </Par>
            <IoIosCloseCircleOutline style={{height: '25px', width: '25px', borderRadius: '50%', backgroundColor: 'white'}}
           type='submit' value='Submit' onClick={() => setHow(!how)}/>
           </Cont>
        }
    </>
  )
}

const Par = styled.p`
 font-family: Arial, avenier;
 margin-left: 30%;
 text-align: left;
 color: white;
 font-size: 1em;
`;
const Cont = styled.div`
  border: 2px solid black;
  background-image: url(${slide});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
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
`

export default TheBasics;