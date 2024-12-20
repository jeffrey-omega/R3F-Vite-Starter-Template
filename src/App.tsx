import { Experience } from "@/components/Experience";
import { Html, useProgress } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 3], fov: 50 }}>
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
    </Canvas>
  );
}

export default App;
