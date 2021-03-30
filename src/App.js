import React, { useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics, useSphere, useBox, usePlane } from 'use-cannon';
import { useDrag } from 'react-use-gesture';

import '../styles.css';

const Ball = ({args = [0.5, 32, 32]}) => {
  const [ref, api] = useSphere(() => ({args: 0.5, mass: 1}))
  const {viewport} = useThree();

  usePlane(() => ({
    position: [0, -viewport.height,0],
    rotation: [-Math.PI/2, 0, 0],
    onCollide: () => {
      api.position.set(0,0,0)
      api.velocity.set(0,10,0)
    }
  }))

  return (
    <mesh ref={ref}>
    <sphereBufferGeometry args={args}/>
    <meshStandardMaterial color='white'/>
  </mesh>
  )
};

const Paddle = ({args = [2, 0.5, 1]}) => {
  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args}))

  useFrame(state => {
    api.position.set(state.mouse.x * viewport.width/2, -state.viewport.height/2, 0)
    api.rotation.set(0,0,state.mouse.x * Math.PI/5)
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args}/>
      <meshStandardMaterial color='green'/>
    </mesh>
  )
};

const Block = ({ args = [2, 0.5, 1], color, ...props }) => {

  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args, ...props}))

  return (
  <mesh ref={ref}>
    <boxBufferGeometry args={[2, 0.5, 1]}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
};

const Piece = ({ args = [2, 0.5, 1], color, ...props }) => {
  const [position, setPosition] = useState([0, 0, 0]);
  // const [ref, api] = useBox(() => ({position: position, ...props}))
  const ref = useRef();
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const drag = useDrag(({ offset:[x, y] }) => {
    const [,, z] = position;
    setPosition([x / aspect, -y / aspect, z]);
  }, { pointerEvents: true});

  return <group {...drag()} />
}

  //  <mesh ref={ref} position={position} {...drag()}>
  //    <boxBufferGeometry args={[2, 0.5, 1]}/>
  //    <meshStandardMaterial color={color}/>
  //  </mesh>


export default function App() {
  return (
    <Canvas camera={{position: [0, 5, 12], fov: 50}}>
      <ambientLight intensity={0.3}/>
      <pointLight position={[10, 10, 5]}/>
      <pointLight position={[-10, -10, -5]}/>
      <Physics gravity={[0, -30, 0]}
        defaultContactMaterial={{restitution: 1.01}}
      >
        <Ball />
        <Paddle />
        <Block color='orange' position={[1, 1, 0]} />
      </Physics>
  </Canvas>
  )
}




/* NOTES:
  Removed Geometry (as m) and Face3 (as y) from use-cannon node modules, import error

*/