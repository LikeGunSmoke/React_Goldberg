import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
import useSound from 'use-sound'
import hit from '../assets/sounds/cymbal.mp3'

export default function Cymbal(props) {
  const [playOn] = useSound(hit, {volume: 0.5});
  const group = useRef()
  const { nodes, materials } = useGLTF('Cymbal/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh onClick={() => playOn()} geometry={nodes.mesh_0.geometry} material={materials.Appearance} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
