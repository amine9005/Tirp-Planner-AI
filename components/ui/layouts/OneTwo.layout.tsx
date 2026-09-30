import { ReactNode } from "react";

interface Props {
  left: ReactNode;
  right: ReactNode;
}

const OneTwoLayout = ({ left, right }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-10">
      {left}
      {right}
    </div>
  );
};

export default OneTwoLayout;
