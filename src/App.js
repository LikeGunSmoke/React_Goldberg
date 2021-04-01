import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree, useLoader } from 'react-three-fiber';
import { Physics, useSphere, useBox, usePlane } from 'use-cannon';
import { useDrag, useGesture } from 'react-use-gesture';
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import '../styles.css';


const Ball = ({args = [0.25, 32, 32], ...props}) => {
  const [ref, api] = useSphere(() => ({args: 0.25, mass: 1, position: [5, 0, 0]}))
  const {viewport} = useThree();

  usePlane(() => ({
    position: [0, -viewport.height,0],
    rotation: [-Math.PI/2, 0, 0],
    onCollide: () => {
      api.position.set(5,0,0)
      api.velocity.set(0,10,0)
    }
  }))

  const [goal] = useBox(() => ({
    ...props,
    onCollide: () => {
    console.log('Winner!!!');
    api.position.set(props)
  }
  }))

  return (
    <>
    <mesh ref={ref}>
      <sphereBufferGeometry position={[-5, -5, 0]} args={args}/>
      <meshStandardMaterial color='white'/>
   </mesh>
   <mesh ref={goal}>
     <boxBufferGeometry args={[1, 1, 1]} />
     <meshStandardMaterial color='red' />
  </mesh>
   </>
  )
};

const Paddle = ({args, color}) => {
  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args}))

  useFrame(state => {
    api.position.set(state.mouse.x * viewport.width/2, -state.viewport.height/2, 0)
    api.rotation.set(0,0,state.mouse.x * Math.PI/10)
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

const Piece = ({args, color, dim, ...props}) => {

  const [position] = useState([0, 0, 0]);
  const [ref, api] = useBox(() => ({...props, args: dim}))
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;
  const drag = useDrag(({ offset:[x, y] }) => {
    const [,, z] = position;
    api.position.set(x / aspect, -y / aspect, z);
  }, { pointerEvents: true});

  return (
    <mesh ref={ref} {...drag()} >
      <boxBufferGeometry  args={args} />
      <meshStandardMaterial  color={color} />
    </mesh>
  )
}

const SlideBlock = ({ args, color, ...props }) => {

  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args, ...props}));

  useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0))

  return (
  <mesh ref={ref}>
    <boxBufferGeometry args={args}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
};

const SpinBlock = ({ args, color, ...props }) => {

  const {viewport} = useThree();
  const [ref, api] = useBox(() => ({args, ...props}));

  useFrame(({ clock }) => api.rotation.set(Math.sin(clock.getElapsedTime()) * 10, 7, 5))

  return (
  <mesh ref={ref}>
    <boxBufferGeometry args={args}/>
    <meshStandardMaterial color={color}/>
  </mesh>
  )
};

const Background = () => {
  const { scene } = useThree();
  const loader = new THREE.CubeTextureLoader();
  const texture = loader.load([
    "http://localhost:3000/api/forestSide.jpg",
    "http://localhost:3000/api/forestSide.jpg",
    "http://localhost:3000/api/forestSide.jpg",
    "http://localhost:3000/api/forestSide.jpg",
    "http://localhost:3000/api/forestSide.jpg",
    "http://localhost:3000/api/forestSide.jpg",
  ])
  scene.background = texture;
  return null;
}

// Currently doesn't work, unable to glb or gltf... Research!!!
const  Thwomp = () => {
  const { nodes } = useLoader(GLTFLoader, '/React_Goldberg/assets/st-class-glb/source/st_class.glb');
  return (
    <group>
      <mesh visible geometry={nodes.Default.geometry}>
        <meshStandardMaterial
          attach="material"
        />
      </mesh>
    </group>
  );
}


export default function App() {
  return (
    <Canvas camera={{position: [0, 2, 10], fov: 80}}>
      <ambientLight intensity={0.3}/>
      <pointLight position={[10, 10, 5]}/>
      <pointLight position={[-10, -10, -5]}/>
      <Physics gravity={[0, -30, 0]}
        defaultContactMaterial={{restitution: 1.1}}
      >
        <Background />

        <Ball position={[-7, 2.5, 0]}/>
        <Paddle args={[2, 0.5, 1]} color='green'/>
        <Block color='yellow' args={[1, 2, 1]} position={[-5.5, 2.55, 0]} />
        <Block color='yellow' args={[2, 0.5, 1]} position={[-7, 1.8, 0]} />
        <Block color='yellow' args={[2, 0.5, 1]} position={[-4, 4, 0]} />
        <Block color='yellow' args={[2, 0.5, 1]} position={[0, 4, 0]} />
        <SpinBlock color='purple' args={[1, 1, 1]} position={[-2, 4, 0]} />
        <SlideBlock color='purple' args={[0.75, 0.75, 0.75]} position={[0, 0, 0]} />
        <Piece dim={[2, 1, 1]} args={[4, 2, 1]} color='blue' position={[5, 5, 0]}/>
        <Piece dim={[1, 1, 1]} args={[1, 1, 1]} color='blue' position={[5, -5, 0]}/>
      </Physics>
  </Canvas>
  )
}


/* NOTES:

  If local files won't run run this in a seperate terminal: /Users/robertstrange/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --allow-file-access-from-files

  CubeTextureLoader: images MUST be square (ie: 600 x 600 pixels/in/cm etc...)

  Removed Geometry (as m) and Face3 (as y) from use-cannon node modules, import error

*/