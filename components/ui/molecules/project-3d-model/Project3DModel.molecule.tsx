"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";
import { ReactNode, Suspense } from "react";
import { Html, useProgress } from "@react-three/drei";
import { LoaderPinwheelIcon } from "lucide-react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

//type
import type { Mesh } from "three";
import { Badge } from "../../atoms/badge/badge";
function Model({
  scale,
  modelName,
  preview = false,
}: {
  scale: number;
  modelName: string;
  preview?: boolean;
}) {
  const modelRef = useRef<Mesh>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });
  const { scene } = useGLTF("/models/" + modelName);
  return <primitive object={scene} scale={scale} />;
}
function Loader(): ReactNode {
  const { progress } = useProgress();
  return (
    <Html>
      <div className="flex w-full animate-pulse flex-col justify-center items-center gap-5">
        {/* <span className="canvas-load"></span> */}
        <LoaderPinwheelIcon className="size-10 animate-spin text-gray-700" />
        <span className="text-gray-700 font-bold text-md">
          {"Loading " + progress.toFixed(2)}%
        </span>
      </div>
    </Html>
  );
}

const Project3DModelMolecule = ({
  modelName,
  preview = false,
}: {
  modelName: string;
  className?: string;
  preview?: boolean;
}) => {
  return (
    <div className={"relative min-h-50 w-full h-full"}>
      <Canvas
        camera={{ fov: 90 }}
        className="cursor-pointer min-h-50 w-fit h-fit bg-gray-100 rounded-lg "
      >
        {/* <Loader /> */}
        <Suspense fallback={<Loader />}>
          {preview ? "" : <OrbitControls />}
          <Stage environment={"sunset"}>
            <Model scale={0.2} modelName={modelName} />
          </Stage>
        </Suspense>
      </Canvas>
      <Badge className="absolute bottom-3 left-3 w-fit h-fit">3D Model</Badge>
    </div>
  );
};

export default Project3DModelMolecule;
