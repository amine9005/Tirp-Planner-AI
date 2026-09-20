import { H2 } from "@/components/ui/atoms/heading/heading2";
import { SelectByIconType } from "@/types/create-trip.types";
import Link from "next/link";

const SelectByIconOrganism = ({
  items,
  onSend,
}: {
  items: SelectByIconType[];
  onSend: ({ message }: { message: string }) => void;
}) => {
  return (
    <div className="flex justify-center items-center mt-4 gap-2">
      {items.map((Item, index) => (
        <Link
          key={index}
          className="flex w-20 md:w-40 flex-col bg-slate-500 p-3 border-2 hover:scale-90 transition-all duration-300 rounded-2xl hover:border-primary cursor-pointer gap-2 justify-center items-center"
          href={"/create-new-trip"}
          onClick={() => onSend({ message: Item.prompt })}
        >
          <H2>{Item.icon}</H2>
          <H2 size={"md"} variant={"secondary"}>
            {Item.title}
          </H2>
        </Link>
      ))}
    </div>
  );
};

export default SelectByIconOrganism;
