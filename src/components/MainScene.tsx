import { OrbitControls, RoundedBox, Sphere, Stage } from "@react-three/drei";
import { DoubleSide, MeshPhysicalMaterial, TextureLoader } from "three";

export const MainScene = ({
  color,
  roughness,
  metalness,
  transmission,
  thickness,
  clearcoat,
  reflectivity,
  iridescence,
  sheen,
  transparent,
  emissiveColor,
  emissiveIntensity,
  sheenColor,
  roughnessMap,
  map,
  aoMap,
  aoIntensity,
  normalIntensity,
  normalMap,
  displacementlIntensity,
  displacementlMap,
}: any) => {
  const material = new MeshPhysicalMaterial({
    side: DoubleSide,
    ...(map ? { map: new TextureLoader().load(map) } : { color }),
    ...(roughnessMap
      ? { roughnessMap: new TextureLoader().load(roughnessMap) }
      : { roughness }),
    ...(aoMap
      ? { aoMap: new TextureLoader().load(aoMap), aoMapIntensity: aoIntensity }
      : {}),
    ...(normalMap
      ? {
          bumpMap: new TextureLoader().load(normalMap),
          bumpScale: normalIntensity,
        }
      : {}),
    ...(displacementlMap
      ? {
          displacementMap: new TextureLoader().load(displacementlMap),
          displacementScale: displacementlIntensity,
        }
      : {}),

    metalness,
    transmission,
    thickness,
    clearcoat,
    reflectivity,
    iridescence,
    sheen,
    sheenColor,
    transparent,
    emissive: emissiveColor,
    emissiveIntensity: emissiveIntensity,
  });
  return (
    <Stage environment={"lobby"}>
      <Sphere args={[5, 512, 512]} material={material}></Sphere>
      <RoundedBox args={[3, 3, 3]} />
      <OrbitControls />
    </Stage>
  );
};
