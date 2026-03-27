import { ReactNode } from "react";
interface Props {
  cols?: number;

  left_span?: number;
  left_justify?: "start" | "center" | "end";
  left_align?: "start" | "center" | "end";
  left_children?: ReactNode | string;

  right_span?: number;
  right_justify?: "start" | "center" | "end";
  right_align?: "start" | "center" | "end";
  right_children?: ReactNode;
}

const Hero2Cols = ({
  // cols = 10,
  // left_span = 5,
  // left_justify = "center",
  // left_align = "center",
  left_children = "Left col",
  // right_span = 5,
  // right_justify = "center",
  // right_align = "center",
  right_children = "Right col",
}: Props) => {
  return (
    <div className="hero-section w-full  ">
      <div
        className={` w-full min-h-[calc(100dvh-60px)] p-4 grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-4`}
      >
        <div className={`col-span-5`}>
          <div
            className={`w-full h-full flex flex-col justify-center items-center space-y-4`}
          >
            {left_children}
          </div>
        </div>
        <div className={`col-span-5`}>
          <div
            className={`w-full h-full flex flex-col justify-center items-center`}
          >
            {right_children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero2Cols;
