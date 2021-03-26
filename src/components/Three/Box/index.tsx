import type { FC } from 'react'
import { useRef, useState } from 'react'
import { MeshProps, useFrame, Vector3 } from 'react-three-fiber'
import type { Mesh } from 'three'
import { animated, useSpring } from '@react-spring/three'

const Box: FC<MeshProps> = ({ children, ...other }) => {
  const mesh = useRef<Mesh>()

  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const { scale, color } = useSpring({
    color: hovered ? '#ffc0cb' : '#fff',
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    config: { mass: 5, tension: 400, friction: 50, precision: 0.0001 },
  })

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
    <animated.mesh
      {...other}
      ref={mesh}
      scale={(scale as unknown) as Vector3}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <animated.meshStandardMaterial color={color} />
      {children}
    </animated.mesh>
  )
}

export default Box
