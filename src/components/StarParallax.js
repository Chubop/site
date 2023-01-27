import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { useWindowSize } from '@react-hook/window-size'

function Box(props) {

  const [width, height] = useWindowSize();
  
  // This reference will give us direct access to the mesh
  const mesh = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.z += delta * 0.015))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <Stars radius={width < 900 ? 50 : 200} count={1000}/>
    </mesh>
  )
}

export default function StarParallax(props){
  return(
    <Canvas style={{top: 0, left: 0, position: 'fixed', zIndex: -9999}}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}