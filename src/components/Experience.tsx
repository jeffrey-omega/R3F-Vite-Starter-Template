import { OrbitControls } from "@react-three/drei";
import { ReactLogo } from "./Example";

export const Experience = () => {
  return (
    <>
      <OrbitControls
        enableZoom={true}
        //minDistance={6}
        //maxDistance={19}
        autoRotate={false}
        autoRotateSpeed={-0.45}
        target={[0, 0.5, 0]}
        //minPolarAngle={1.3}
        //maxPolarAngle={Math.PI / 2}
        enablePan={false}
      />
      <ReactLogo position={[0, 0.5, 0]} />
    </>
  );
};
