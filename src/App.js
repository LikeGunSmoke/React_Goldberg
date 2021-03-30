import React, { useState, useRef } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics, useSphere, useBox, usePlane } from 'use-cannon';
import { useDrag, useGesture } from 'react-use-gesture';

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

const Paddle = ({args, color}) => {
  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args}))

  useFrame(state => {
    api.position.set(state.mouse.x * viewport.width/2, -state.viewport.height/2, 0)
    api.rotation.set(0,0,state.mouse.x * Math.PI/5)
  })

  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args}/>
      <meshStandardMaterial color={color}/>
    </mesh>
  )
};

const Block = ({ args, color, ...props }) => {

  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args, ...props}))

  return (
  <mesh ref={ref}>
    <boxBufferGeometry args={args}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
};

const Piece = ({args, color}) => {

  const box = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({mass: 0}))
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const drag = useDrag(({ offset:[x, y] }) => {
    const [,, z] = position;
    api.position.set(x / aspect, -y / aspect, z);
  }, { pointerEvents: true});

  return (
    <>
    <mesh ref={ref} {...drag()}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={color}/>
    </mesh>
    </>
  )
}



export default function App() {
  return (
    <Canvas camera={{position: [0, 5, 12], fov: 50}}>
      <ambientLight intensity={0.3}/>
      <pointLight position={[10, 10, 5]}/>
      <pointLight position={[-10, -10, -5]}/>
      <Physics gravity={[0, -30, 0]}
        defaultContactMaterial={{restitution: 1.1}}
      >
        <Ball />
        <Paddle args={[2, 0.5, 1]} color='green'/>
        <Block color='orange' args={[2, 0.5, 1]} position={[5, 5, 0]} />
        <Piece args={[4, 1, 1]} color='blue'/>
        <Piece args={[1, 1, 1]} color='red'/>
      </Physics>
  </Canvas>
  )
}




/* NOTES:
  Removed Geometry (as m) and Face3 (as y) from use-cannon node modules, import error

*/