import React, { Component, useRef, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber';
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import App from './App.js';

// TESTING ZONE
import Moonrise from './Moonrise.js';
import Sunrise from './Sunrise.js';

import Drum from './Drum.js';
import Cymbal from './Cymbal.js';
import Guitar from './Guitar.js';

// import DrumKit from './DrumKit'; // works, lotta meshes to sort through...

//import SpaceBuddy from './SpaceBuddy.js';

// -------------------------------------------------------------


import axios from 'axios';
//import font from '../assets/font.json';
import font from 'three/examples/fonts/helvetiker_regular.typeface.json'

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
    // "clamps" rotation axis (can't go up/down)
    // maxPolarAngle={Math.PI / 3}
    // minPolarAngle={Math.PI / 3}
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

const Logo = () => {
  const ref = useRef();
  const text = new THREE.FontLoader().parse(font);
  let options = {
    font: text,
    size: 2,
    height: 1,
  }

  return (
    <Canvas style={{height: '50%', width: '50%'}} camera={{position: [0,0,5], fov: 100}}>
      <OControls />
      <Plane />
      <ambientLight intensity={0.5}/>
      <spotLight penumbra={1} position={[0, 8, 10]} castShadow />
      <mesh position={[-8, 0, 0]}  ref={ref} castShadow >
        <textGeometry  attach='geometry' args={['React Goldberg', options]} />
        <meshPhongMaterial metalness={5} color='#FFD700' attach='material' />
      </mesh>
    </Canvas>
  )
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  };

  handleLogin(event) {
    event.preventDefault();
    this.setState({
      loggedIn: true,
      username: '',
      password: '',
    })
  };

  addUser(username, password) {
    const user = {username: username, password: password};
    axios.post('/api/users', user)
      .then((res) => {
        console.log(`Added ${user.username}`)
      })
      .catch((err) => {
        console.error(err);
      })
  };

  handleJoin(event) {
    event.preventDefault();
    this.addUser(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: '',
    })
  };

  render() {
    if (!this.state.loggedIn) {
    return (
      <>
      <Logo />
      <div>
      <form>
        <input
        name='username'
        type='text'
        value={this.state.username}
        onChange={this.handleChange}
        placeholder='Username'
       />
        <input
        name='password'
        type='text'
        value={this.state.password}
        onChange={this.handleChange}
        placeholder='Password'
        />
      </form>
      <button onClick={this.handleLogin} type='submit'>Login</button>
      <button onClick={this.handleJoin} type='submit'>Join</button>
    </div>
    </>
    )
  } else {
    return (
    <Canvas pixelRatio={[1, 2]} camera={{position: [0, 0, 5]}} >
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
    )
  }
 }
};

export default Login;

ReactDOM.render(<Login/>, document.getElementById('root'));