import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { KeyboardControls, Preload } from '@react-three/drei'

const root = ReactDOM.createRoot(document.querySelector('#root'))

const keys = [
    { name: 'forward', keys: [ 'ArrowUp', 'KeyW' ] },
    { name: 'backward', keys: [ 'ArrowDown', 'KeyS' ] },
    { name: 'leftward', keys: [ 'ArrowLeft', 'KeyA' ] },
    { name: 'rightward', keys: [ 'ArrowRight', 'KeyD' ] },
    { name: 'jump', keys: [ 'Space' ] }
]

root.render(
    <KeyboardControls
    map={ keys }
    >
        <Canvas
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                // position: [ 2.5, 4, 6 ]
            } }
        >
            <Experience />
            <Preload all />
        </Canvas>

    </KeyboardControls>
)