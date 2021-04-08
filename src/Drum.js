import React, { useRef, Suspense } from 'react'
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber';
import { useGLTF } from '@react-three/drei/core/useGLTF'
import useSound from 'use-sound';
import DrumHit from '../assets/sounds/DrumHit.mp3';

export default function Drum(props) {
  const [playOn] = useSound(DrumHit, {volume: 0.5});
  const group = useRef()
  const { nodes, materials } = useGLTF('Drum/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group scale={[1,1,1]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0.54, 3.67, -9.66]} rotation={[-Math.PI / 2, 0, 0]}>
              <mesh onClick={() => playOn()} geometry={nodes['Drum_Material_#104_0'].geometry} material={materials.Material_104} />
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}
