import { Scene, PerspectiveCamera, WebGLRenderer, BoxGeometry, Mesh, MeshBasicMaterial } from 'three'

export default function init(container: HTMLDivElement) {
  let isMounted = true

  const scene = new Scene()
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  container.appendChild(renderer.domElement)

  const geometry = new BoxGeometry()
  const material = new MeshBasicMaterial({ color: '#fff' })
  const cube = new Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 2

  const animate = () => {
    if (!isMounted) return
    requestAnimationFrame(animate)

    cube.rotation.y += 0.02

    renderer.render(scene, camera)
  }

  animate()

  return function disposer() {
    isMounted = false
  }
}
