import { Line, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { EllipseCurve, Mesh } from "three";

export const Atom = (props: JSX.IntrinsicElements["group"]) => {
  return (
    <group {...props}>
      <Electron position={[0, 0, 0.5]} speed={4} />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, Math.PI / 3]}
        speed={5}
      />
      <Electron
        position={[0, 0, 0.5]}
        rotation={[0, 0, -Math.PI / 3]}
        speed={6}
      />

      <Sphere args={[0.55, 64, 64]} position={[0, 0, 0.5]}>
        <meshBasicMaterial color="turquoise" toneMapped={false} />
      </Sphere>
    </group>
  );
};

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef<Mesh>(null!);
  const points = useMemo(
    () =>
      new EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(50),
    []
  );
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });
  return (
    <group {...props}>
      <mesh ref={ref}>
        <sphereGeometry args={[0.25]} />
        <meshBasicMaterial color="turquoise" />
      </mesh>
      <mesh>
        <Line worldUnits points={points} color="turquoise" lineWidth={0.1} />
      </mesh>
    </group>
  );
}
