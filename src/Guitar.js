import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'
import useSound from 'use-sound'
import chord from '../assets/sounds/guitar.mp3'

export default function Guitar(props) {
  const [playOn] = useSound(chord, {volume: 0.5});
  const group = useRef()
  const { nodes, materials } = useGLTF('Guitar/scene.gltf')
  return (
    <group onClick={() => playOn()} ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.pCube64_Neck_0.geometry} material={materials.Neck} />
          <mesh geometry={nodes.pCube64_Neck2_0.geometry} material={materials.Neck2} />
          <mesh geometry={nodes.pCube64_neckFace_0.geometry} material={materials.neckFace} />
          <mesh geometry={nodes.pCube64_SilverLace_0.geometry} material={materials.SilverLace} />
          <mesh geometry={nodes.pCube64_mattBlack_0.geometry} material={materials.mattBlack} />
          <mesh geometry={nodes.pCube64_sliver1_0.geometry} material={materials.sliver1} />
          <mesh geometry={nodes.pCube64_lambert2_0.geometry} material={materials.lambert2} />
          <mesh geometry={nodes.pCube64_Bronze_0.geometry} material={materials.Bronze} />
          <mesh geometry={nodes.pCube64_DirtyBronze_0.geometry} material={materials.DirtyBronze} />
          <mesh geometry={nodes.pCube64_Chrome_0.geometry} material={materials.Chrome} />
          <mesh geometry={nodes.pCube64_wood2_0.geometry} material={materials.wood2} />
          <mesh geometry={nodes.pCube64_Wood_2_0.geometry} material={materials.Wood_2} />
          <mesh geometry={nodes.pCube64_wood_0.geometry} material={materials.wood} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
