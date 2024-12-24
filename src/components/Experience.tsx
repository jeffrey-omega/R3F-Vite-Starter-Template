import { OrbitControls } from "@react-three/drei";
import { Atom } from "./Atom";

export const Experience = () => {
  return (
    <>
      <OrbitControls enableZoom={true} enablePan={false} />
      <Atom />
    </>
  );
};
