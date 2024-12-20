import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function ReactLogo(props: JSX.IntrinsicElements["group"]) {
  const ring1Ref = useRef<THREE.Points>(null!);
  const ring2Ref = useRef<THREE.Points>(null!);
  const ring3Ref = useRef<THREE.Points>(null!);

  useFrame((_state, delta) => {
    ring1Ref.current.rotation.y += delta;
    ring2Ref.current.rotation.x += delta;
    ring3Ref.current.rotation.y += delta;
  });

  return (
    <group {...props}>
      <points
        name="Green Ring"
        rotation-x={Math.PI / 2}
        ref={ring1Ref}
        scale={0.85}
      >
        <torusGeometry args={[1, 0.075, 64, 64]} />
        <pointsMaterial color="green" size={0.05} sizeAttenuation />
      </points>

      <points name="Red Ring" rotation-z={1} ref={ring2Ref} scale={0.7}>
        <torusGeometry args={[1, 0.1, 64, 64]} />
        <pointsMaterial color="red" size={0.05} sizeAttenuation />
      </points>

      <points
        name="Blue Ring"
        rotation-y={Math.PI / 2}
        ref={ring3Ref}
        scale={0.57}
      >
        <torusGeometry args={[1, 0.08, 64, 64]} />
        <pointsMaterial color="blue" size={0.05} sizeAttenuation />
      </points>

      <points scale={0.9}>
        <sphereGeometry args={[0.55, 64, 64]} />
        <pointsMaterial color="turquoise" size={0.015} sizeAttenuation />
      </points>
    </group>
  );
}
