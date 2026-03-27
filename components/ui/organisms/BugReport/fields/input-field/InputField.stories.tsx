import { Meta, StoryObj } from "@storybook/nextjs-vite";
import InputField from "./InputField.molecule";
import { useBugReportForm } from "@/validations/bugReport.zod";

const inputFieldValues = {
  name: "title",
  labelTitle: "Title",
  type: "text",
  placeholder: "Place holder ",
  autoComplete: "off",
};

const HookedInput = () => {
  const form = useBugReportForm();

  return <InputField form={form} item={inputFieldValues} />;
};

const meta = {
  title: "Molecules/Fields/Input",

  component: HookedInput,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },

  args: {
    item: inputFieldValues,
  },
} satisfies Meta<typeof HookedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
