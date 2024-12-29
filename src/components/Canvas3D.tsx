import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls,useGLTF, PerspectiveCamera} from '@react-three/drei';


const Recipiente: React.FC = () => {
    const { scene } = useGLTF('/models/recipiente.gltf'); // Ruta relativa en `public/models/`
    return <primitive object={scene} scale = {1.5} position={[0,0,0]} />;
  };

const Extractor: React.FC = () => {
    const { scene } = useGLTF('/models/extractor.gltf'); // Ruta relativa en `public/models/`
    return <primitive object={scene} scale = {1.5} position={[15,2,5]} />;
};


const Canvas3D: React.FC = () => {
  return (
    <Canvas style={{ background: '#fff', height: '100vh' }}>
      {/* Configura la cámara para que comience más atrás */}
      <PerspectiveCamera makeDefault position={[0,0,80]} />
      


      <ambientLight intensity={0.8} />
      <directionalLight position={[10, -8, 10]} />
      <OrbitControls />

      
      <Extractor /> 
      <Recipiente /> 
    </Canvas>
  );
};

export default Canvas3D;

