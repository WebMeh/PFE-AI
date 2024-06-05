import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function NeuralNetwork() {
    const meshRef = React.useRef();

    React.useEffect(() => {
        const mesh = meshRef.current;
        let frameId;

        const animate = () => {
            mesh.rotation.y += 0.005;
            frameId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
        <mesh ref={meshRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={'#00ff00'} wireframe />
        </mesh>
    );
}

// function DataPoint({ position }) {
//     return (
//         <mesh position={position}>
//             <sphereGeometry args={[0.1, 16, 16]} />
//             <meshStandardMaterial color={'#ff0000'} />
//         </mesh>
//     );
// }

// function Book({ position }) {
//     return (
//         <mesh position={position}>
//             <boxGeometry args={[0.2, 0.3, 0.05]} />
//             <meshStandardMaterial color={'#0000ff'} />
//         </mesh>
//     );
// }


function Accueil() {
    return (
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <h1>AI-For-EDU</h1>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars />
                <NeuralNetwork />
                <OrbitControls />
            </Canvas>
        </div>

    );
}

export default Accueil;
