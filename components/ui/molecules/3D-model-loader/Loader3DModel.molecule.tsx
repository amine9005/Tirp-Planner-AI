import { Html, useProgress } from "@react-three/drei";
import { LoaderPinwheelIcon } from "lucide-react";

const Loader3D = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"></span>
      <LoaderPinwheelIcon className="size-10 animate-spin" />
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader3D;
