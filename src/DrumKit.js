import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/core/useGLTF'

export default function DrumKit(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[3.11, -2.2, -3.88]} rotation={[0, -0.01, 0]}>
            <mesh geometry={nodes.mesh_0.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.9, -2.2, -3.8]} rotation={[-Math.PI, 0.01, -Math.PI]}>
            <mesh geometry={nodes.mesh_1.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-2.04, -0.69, -3.09]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_2.geometry} material={materials['Material.010']} />
          </group>
          <group position={[0.04, -0.39, 0.25]}>
            <mesh geometry={nodes.mesh_3.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -3.24, 0.2]}>
            <mesh geometry={nodes.mesh_4.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -3.79, 0.56]} rotation={[0.4, 0, 0]}>
            <mesh geometry={nodes.mesh_5.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -3.77, 0.88]}>
            <mesh geometry={nodes.mesh_6.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-2.04, -2.45, -3.09]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_7.geometry} material={materials['Material.010']} />
          </group>
          <group position={[0.05, -3.65, 0.2]}>
            <mesh geometry={nodes.mesh_8.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.37, -2.45, -3.57]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_9.geometry} material={materials['Material.010']} />
          </group>
          <group position={[0.37, -0.69, -3.57]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_10.geometry} material={materials['Material.010']} />
          </group>
          <group position={[4.64, -1.94, -2.55]} rotation={[-Math.PI / 2, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_11.geometry} material={materials['Material.010']} />
          </group>
          <group position={[4.64, -1.94, -3.81]} rotation={[-Math.PI / 2, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_12.geometry} material={materials['Material.010']} />
          </group>
          <group position={[6.96, -0.69, -3.75]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_13.geometry} material={materials['Material.010']} />
          </group>
          <group position={[6.96, -1.33, -3.75]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_14.geometry} material={materials['Material.010']} />
          </group>
          <group position={[3.53, -3.53, -2.29]}>
            <mesh geometry={nodes.mesh_15.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.5, -3.74, -1.13]}>
            <mesh geometry={nodes.mesh_16.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.5, -3.78, -1.68]} rotation={[0.4, 0, 0]}>
            <mesh geometry={nodes.mesh_17.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-4.01, -3.35, -4.49]} rotation={[-Math.PI, 0.08, -Math.PI]}>
            <group position={[0, -1.05, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_19.geometry} material={materials.material_0} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
              <mesh geometry={nodes.mesh_20.geometry} material={materials.material_0} />
            </group>
            <group position={[0, -1.05, 0]}>
              <mesh geometry={nodes.mesh_21.geometry} material={materials.material_0} />
            </group>
            <group position={[0.04, 0, 0.06]} rotation={[-3.14, 1.05, 2.83]}>
              <mesh geometry={nodes.mesh_22.geometry} material={materials.material_0} />
            </group>
            <group position={[-0.07, 0, 0]} rotation={[0, 0, -0.31]}>
              <mesh geometry={nodes.mesh_23.geometry} material={materials.material_0} />
            </group>
            <group position={[0.04, 0, -0.06]} rotation={[-3.14, -1.05, 2.83]}>
              <mesh geometry={nodes.mesh_24.geometry} material={materials.material_0} />
            </group>
            <mesh geometry={nodes.mesh_18.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-4.01, -2.86, -4.49]} rotation={[0, -0.08, -1.92]}>
            <mesh geometry={nodes.mesh_25.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_26.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-4.01, -2.86, -4.49]} rotation={[-Math.PI, -0.97, 1.22]}>
            <mesh geometry={nodes.mesh_27.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_28.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-4.01, -2.86, -4.49]} rotation={[-Math.PI, 1.12, 1.22]}>
            <mesh geometry={nodes.mesh_29.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_30.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-4.01, -0.05, -4.49]} rotation={[Math.PI, 1.12, -2.35]}>
            <mesh geometry={nodes.mesh_31.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-3.92, -0.06, -4.53]} rotation={[Math.PI / 2, 0, -2.02]}>
            <mesh geometry={nodes.mesh_32.geometry} material={materials['black_plastic.004']} />
          </group>
          <group position={[-4.01, -0.06, -4.48]} rotation={[Math.PI / 2, 0, 1.12]}>
            <mesh geometry={nodes.mesh_33.geometry} material={materials['black_plastic.004']} />
          </group>
          <group position={[-4.01, -1.75, -4.49]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_34.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-3.63, -0.19, -3.7]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_35.geometry} material={materials['Material.016']} />
          </group>
          <group position={[-2.99, -1.52, -2.63]} rotation={[0, -1.12, Math.PI]}>
            <group position={[-1.35, 0.95, -0.03]} rotation={[Math.PI, 0, 0]}>
              <mesh geometry={nodes.mesh_38.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.7, 0.95, -1.15]} rotation={[0, Math.PI / 3, Math.PI]}>
              <mesh geometry={nodes.mesh_39.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.65, 0.95, 1.18]} rotation={[0, -Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_40.geometry} material={materials['METAL.027']} />
            </group>
            <mesh geometry={nodes.mesh_36.geometry} material={materials['kalvo.001']} />
            <mesh geometry={nodes.mesh_37.geometry} material={materials['Material.013']} />
          </group>
          <group position={[-5.82, -1.11, -3.28]} rotation={[Math.PI / 2, 0, 1.12]}>
            <mesh geometry={nodes.mesh_41.geometry} material={materials['black_plastic.004']} />
          </group>
          <group position={[-5.81, -3.35, -3.28]} rotation={[-Math.PI, 0.08, -Math.PI]}>
            <group position={[0.04, 0, -0.06]} rotation={[-3.14, -1.05, 2.83]}>
              <mesh geometry={nodes.mesh_43.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[-0.07, 0, 0]} rotation={[0, 0, -0.31]}>
              <mesh geometry={nodes.mesh_44.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.04, 0, 0.06]} rotation={[-3.14, 1.05, 2.83]}>
              <mesh geometry={nodes.mesh_45.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
              <mesh geometry={nodes.mesh_46.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_47.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -1.05, 0]}>
              <mesh geometry={nodes.mesh_48.geometry} material={materials['METAL.027']} />
            </group>
            <mesh geometry={nodes.mesh_42.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-5.81, -2.86, -3.28]} rotation={[0, -0.08, -1.92]}>
            <mesh geometry={nodes.mesh_49.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_50.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-5.81, -2.86, -3.28]} rotation={[-Math.PI, -0.97, 1.22]}>
            <mesh geometry={nodes.mesh_51.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_52.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-5.81, -2.86, -3.28]} rotation={[-Math.PI, 1.12, 1.22]}>
            <mesh geometry={nodes.mesh_53.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_54.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-5.81, -1.1, -3.29]} rotation={[Math.PI, 1.12, -2.35]}>
            <mesh geometry={nodes.mesh_55.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-5.72, -1.11, -3.32]} rotation={[Math.PI / 2, 0, -2.02]}>
            <mesh geometry={nodes.mesh_56.geometry} material={materials['black_plastic.004']} />
          </group>
          <group position={[-5.81, -1.23, -3.28]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_57.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-5.43, -1.23, -2.49]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_58.geometry} material={materials['Material.016']} />
          </group>
          <group position={[0.04, -1.23, 0.2]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_59.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -2.86, 0.2]} rotation={[-Math.PI, 1.12, 1.22]}>
            <mesh geometry={nodes.mesh_60.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_61.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -2.86, 0.2]} rotation={[-Math.PI, -0.97, 1.22]}>
            <mesh geometry={nodes.mesh_62.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_63.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -2.86, 0.2]} rotation={[0, -0.08, -1.92]}>
            <mesh geometry={nodes.mesh_64.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_65.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -3.35, 0.2]} rotation={[-Math.PI, 0.08, -Math.PI]}>
            <group position={[0, -1.05, 0]}>
              <mesh geometry={nodes.mesh_67.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_68.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
              <mesh geometry={nodes.mesh_69.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.04, 0, 0.06]} rotation={[-3.14, 1.05, 2.83]}>
              <mesh geometry={nodes.mesh_70.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[-0.07, 0, 0]} rotation={[0, 0, -0.31]}>
              <mesh geometry={nodes.mesh_71.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.04, 0, -0.06]} rotation={[-3.14, -1.05, 2.83]}>
              <mesh geometry={nodes.mesh_72.geometry} material={materials['METAL.027']} />
            </group>
            <mesh geometry={nodes.mesh_66.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -0.7, 0.2]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_73.geometry} material={materials['Material.016']} />
          </group>
          <group position={[0.04, -0.93, 0.2]} rotation={[0, 1.12, -Math.PI]} scale={[1, 1, 1]}>
            <mesh geometry={nodes.mesh_74.geometry} material={materials['Material.016']} />
          </group>
          <group position={[0.04, -0.04, 0.2]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_75.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -0.04, 0.2]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_76.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[0.04, -0.77, 0.2]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_77.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[-0.59, -1.52, -3.11]} rotation={[0, -1.12, Math.PI]}>
            <group position={[0.65, 0.95, 1.18]} rotation={[0, -Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_80.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.7, 0.95, -1.15]} rotation={[0, Math.PI / 3, Math.PI]}>
              <mesh geometry={nodes.mesh_81.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[-1.35, 0.95, -0.03]} rotation={[Math.PI, 0, 0]}>
              <mesh geometry={nodes.mesh_82.geometry} material={materials['METAL.027']} />
            </group>
            <mesh geometry={nodes.mesh_78.geometry} material={materials['kalvo.001']} />
            <mesh geometry={nodes.mesh_79.geometry} material={materials['Material.013']} />
          </group>
          <group position={[3.49, -2.49, -3.12]} rotation={[1.57, -1.12, Math.PI]}>
            <mesh geometry={nodes.mesh_83.geometry} material={materials['kalvo.001']} />
            <mesh geometry={nodes.mesh_84.geometry} material={materials['Material.013']} />
          </group>
          <group position={[6, -1.23, -3.28]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <group position={[-0.02, -0.41, -0.06]} rotation={[0, -1.05, -0.32]}>
              <mesh geometry={nodes.mesh_86.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[-0.02, -0.41, 0.06]} rotation={[0, 1.05, -0.31]}>
              <mesh geometry={nodes.mesh_87.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.09, -0.41, 0]} rotation={[-3.14, 0, 2.83]}>
              <mesh geometry={nodes.mesh_88.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.02, -1.46, 0]} rotation={[0, -1.05, 0]}>
              <mesh geometry={nodes.mesh_89.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.02, -1.46, 0]} rotation={[-Math.PI, 0, -Math.PI]}>
              <mesh geometry={nodes.mesh_90.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.02, -1.46, 0]} rotation={[0, 1.05, 0]}>
              <mesh geometry={nodes.mesh_91.geometry} material={materials['METAL.027']} />
            </group>
            <mesh geometry={nodes.mesh_85.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[6, -2.86, -3.28]} rotation={[-Math.PI, 1.12, 1.22]}>
            <mesh geometry={nodes.mesh_92.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_93.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[6, -2.86, -3.28]} rotation={[-Math.PI, -0.97, 1.22]}>
            <mesh geometry={nodes.mesh_94.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_95.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[6, -2.86, -3.28]} rotation={[0, -0.08, -1.92]}>
            <mesh geometry={nodes.mesh_96.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_97.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[6, -3.35, -3.28]} rotation={[-Math.PI, 0.08, -Math.PI]}>
            <group position={[0, -1.05, 0]}>
              <mesh geometry={nodes.mesh_99.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_100.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
              <mesh geometry={nodes.mesh_101.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.04, 0, 0.06]} rotation={[-3.14, 1.05, 2.83]}>
              <mesh geometry={nodes.mesh_102.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[-0.07, 0, 0]} rotation={[0, 0, -0.31]}>
              <mesh geometry={nodes.mesh_103.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.04, 0, -0.06]} rotation={[-3.14, -1.05, 2.83]}>
              <mesh geometry={nodes.mesh_104.geometry} material={materials['METAL.027']} />
            </group>
            <mesh geometry={nodes.mesh_98.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[6, -1.52, -3.29]} rotation={[0, -1.12, Math.PI]}>
            <mesh geometry={nodes.mesh_105.geometry} material={materials['METAL.027']} />
            <mesh geometry={nodes.mesh_106.geometry} material={materials['kalvo.001']} />
          </group>
          <group position={[3.5, -3.78, -1.68]}>
            <mesh geometry={nodes.mesh_107.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.51, -3.07, -2.29]} rotation={[0.47, 0, 0]}>
            <group position={[0, 1.41, 0.61]}>
              <mesh geometry={nodes.mesh_109.geometry} material={materials['black_plastic.004']} />
            </group>
            <mesh geometry={nodes.mesh_108.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[6, -0.53, -3.18]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.mesh_110.geometry} material={materials['Material.005']} />
          </group>
          <group position={[5.81, -0.53, -3.18]} rotation={[1.58, 0, -0.09]}>
            <mesh geometry={nodes.mesh_111.geometry} material={materials['Material.005']} />
          </group>
          <group position={[2.45, -0.06, -5.69]} rotation={[Math.PI / 2, 0, 2.33]}>
            <mesh geometry={nodes.mesh_112.geometry} material={materials['black_plastic.004']} />
          </group>
          <group position={[2.45, -3.35, -5.68]} rotation={[-Math.PI, 1.29, -Math.PI]}>
            <group position={[0.04, 0, -0.06]} rotation={[-3.14, -1.05, 2.83]}>
              <mesh geometry={nodes.mesh_114.geometry} material={materials.material_0} />
            </group>
            <group position={[-0.07, 0, 0]} rotation={[0, 0, -0.31]}>
              <mesh geometry={nodes.mesh_115.geometry} material={materials.material_0} />
            </group>
            <group position={[0.04, 0, 0.06]} rotation={[-3.14, 1.05, 2.83]}>
              <mesh geometry={nodes.mesh_116.geometry} material={materials.material_0} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[-Math.PI, -Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_117.geometry} material={materials.material_0} />
            </group>
            <group position={[0, -1.05, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_118.geometry} material={materials.material_0} />
            </group>
            <group position={[0, -1.05, 0]}>
              <mesh geometry={nodes.mesh_119.geometry} material={materials.material_0} />
            </group>
            <mesh geometry={nodes.mesh_113.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[2.45, -2.86, -5.68]} rotation={[0, -1.29, -1.92]}>
            <mesh geometry={nodes.mesh_120.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_121.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[2.45, -2.86, -5.68]} rotation={[-Math.PI, 0.24, 1.22]}>
            <mesh geometry={nodes.mesh_122.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_123.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[2.45, -2.86, -5.68]} rotation={[0, 0.81, -1.92]}>
            <mesh geometry={nodes.mesh_124.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_125.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[2.46, -0.05, -5.69]} rotation={[0, 0.81, 0.79]}>
            <mesh geometry={nodes.mesh_126.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[2.52, -0.06, -5.61]} rotation={[Math.PI / 2, 0, -0.81]}>
            <mesh geometry={nodes.mesh_127.geometry} material={materials['black_plastic.004']} />
          </group>
          <group position={[2.45, -1.75, -5.68]} rotation={[0, 0.81, 0]}>
            <mesh geometry={nodes.mesh_128.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[1.85, -0.19, -5.05]} rotation={[0, 0.81, 0]}>
            <mesh geometry={nodes.mesh_129.geometry} material={materials['Material.016']} />
          </group>
          <group position={[3.82, -3.15, 0.49]} rotation={[-Math.PI, 0.08, -Math.PI]}>
            <group position={[0.07, 0, -0.13]} rotation={[-3.14, -1.05, 2.83]}>
              <mesh geometry={nodes.mesh_131.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[-0.15, 0, 0]} rotation={[0, 0, -0.31]}>
              <mesh geometry={nodes.mesh_132.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0.08, 0, 0.13]} rotation={[-3.14, 1.05, 2.83]}>
              <mesh geometry={nodes.mesh_133.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -2.16, 0]} rotation={[Math.PI, -Math.PI / 3, Math.PI]}>
              <mesh geometry={nodes.mesh_134.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -2.16, 0]} rotation={[-Math.PI, Math.PI / 3, -Math.PI]}>
              <mesh geometry={nodes.mesh_135.geometry} material={materials['METAL.027']} />
            </group>
            <group position={[0, -2.16, 0]}>
              <mesh geometry={nodes.mesh_136.geometry} material={materials['METAL.027']} />
            </group>
            <mesh geometry={nodes.mesh_130.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.82, -2.41, 0.49]} rotation={[0, -0.08, -1.92]}>
            <mesh geometry={nodes.mesh_137.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_138.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.82, -2.41, 0.49]} rotation={[-Math.PI, -0.97, 1.22]}>
            <mesh geometry={nodes.mesh_139.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_140.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.82, -2.41, 0.49]} rotation={[-Math.PI, 1.12, 1.22]}>
            <mesh geometry={nodes.mesh_141.geometry} material={materials['rubber.017']} />
            <mesh geometry={nodes.mesh_142.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.82, 1.05, 0.49]} rotation={[-Math.PI, 1.12, -Math.PI]}>
            <mesh geometry={nodes.mesh_143.geometry} material={materials['METAL.027']} />
          </group>
          <group position={[3.82, 0.05, 0.49]}>
            <mesh geometry={nodes.mesh_144.geometry} material={materials['black_plastic.004']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')