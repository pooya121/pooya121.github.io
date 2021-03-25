import React from 'react'
import type { NextPage } from 'next'
import { Canvas } from 'react-three-fiber'
import CanvasContainer from '@/components/CanvasContainer'
import Box from '@/components/Three/Box'

const GettingStarted: NextPage = () => (
  <CanvasContainer>
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  </CanvasContainer>
)

export default GettingStarted
