import React, { Component, useRef, useState, useEffect, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { HashRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from "react-transition-group";

import styled from 'styled-components';
import { HiCubeTransparent } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";

import TheBasics from './TheBasics.js';
import Music from './Music.js';
import Slides from './Slides.js';

// import ScaryEyes from '../ScaryEyes.js';
// import Moonrise from '../Moonrise.js';
// import Sunrise from '../Sunrise';


//import font from 'three/examples/fonts/helvetiker_regular.typeface.json';
import slide from '../../assets/slide.jpeg';
import font from '../../assets/font.json';

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
    autoRotate
    // "clamps" rotation axis (can't go up/down)
    // maxPolarAngle={Math.PI / 3}
    // minPolarAngle={Math.PI / 3}
    />
  )
};

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -10, 0]} receiveShadow >
      <planeBufferGeometry attach='geometry' args={[100, 100]} />
      <meshPhysicalMaterial attach='material' color='grey' />
    </mesh>
  )
};

const Logo = () => {
  const ref = useRef();
  const text = new THREE.FontLoader().parse(font);
  let options = {
    font: text,
    size: 2,
    height: 1,
  };

  return (
    <Canvas style={{height: '50vh', width: '100vw'}} camera={{position: [0,0,5], fov: 100}}>
      <color attach='background' args={['grey']} />
      <OControls />
      <Plane />
      <ambientLight intensity={0.5}/>
      <spotLight penumbra={1} position={[0, 8, 10]} castShadow />
      <mesh position={[-8, 0, 0]}  ref={ref} castShadow >
        <textGeometry  attach='geometry' args={[`React Three Fiber
        101`, options]} />
        <meshPhongMaterial metalness={5} color='red' attach='material' />
      </mesh>
    </Canvas>
  )
};

const Prez = () => {

  const [slides, setSlides] = useState(false);

  return (
    <>
      <div style={{height: '55vh', width: '100vw'}}>
      <Logo/>
      </div>
      {slides ?       <div style={{height: '25vh', width: '80vw', margin: 'auto'}}>
        <Slides />
        <IoIosCloseCircleOutline style={{height: '25px', width: '25px', borderRadius: '50%', backgroundColor: 'white'}}
           type='submit' value='Submit' onClick={() => setSlides(!slides)}/>
      </div> :
      <BtnCont>
      <Btn type='submit' value='Submit' onClick={() => setSlides(!slides)}><HiCubeTransparent style={{height: '40px', width: '40px'}}/><br></br>So What's Up?</Btn>
      </BtnCont>
      }
    </>
    )
};


// const AnimatedSwitch = withRouter(({ location }) => (
//   <TransitionGroup>
//     <CSSTransition key={location.key} classNames="slide" timeout={1000}>
//       <Switch location={location}>
//         {/* <Route path="/home" component={Prez} exact />
//         <Route path="/basics" component={TheBasics} />
//         <Route path="/music" component={Music} /> */}
//         <Route path='/home'>
//           <Prez className='home' />
//         </Route>
//         <Route path='/basics'>
//           <TheBasics className='basics' />
//         </Route>
//         <Route path='/music'>
//           <Music className='music' />
//         </Route>
//       </Switch>
//     </CSSTransition>
//   </TransitionGroup>
// ));

const App = () => {

  // const location = withRouter();
  // const transitions =  useTransition(location, location => location.pathname, {
  //   from: {opacity: 0, transform: 'translate(100%, 0)'},
  //   enter: {opacity: 1, transform: 'translate(0, 0)'},
  //   leave: {opacity: 0, transform: 'translate(-50%, 0)'},
  // })

  return (
    <Router>
      <div>
        <NavBtnCont>
            <Link to='/home'><NavBtn>Home</NavBtn></Link>
            <Link to='/basics'><NavBtn>The Basics</NavBtn></Link>
            <Link to='/music'><NavBtn>Music</NavBtn></Link>
        </NavBtnCont>


        {/* {transitions.map(({ item, props, key }) => {
                <a.div>
                <Switch>
                   <Route path="/home" component={Prez} />
                   <Route path="/basics" component={TheBasics} />
                   <Route path="/music" component={Music} />
                </Switch>
              </a.div>
        })} */}


         <Route path='/home'>
          <Prez />
        </Route>
        <Route path='/basics'>
          <TheBasics />
        </Route>
        <Route path='/music'>
          <Music />
        </Route>


      </div>
    </Router>
  )
};

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
`;
const NavBtnCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: radial-gradient(black, grey 75%, red);
`;
const NavBtn = styled.button`
  position: relative;
  height: 25px;
  width: 100px;
  border: 2px solid black;
  border-radius: 10%;
  background-color: crimson;
  color: white;
  ${NavBtn}:hover {
    transform: scale(1.1);
    text-decoration: underline;
    box-shadow: -2px -2px 2px 5px red;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
