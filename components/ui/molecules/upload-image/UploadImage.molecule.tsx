"use client";
import { validateImages } from "@/validations/upload.validate";
import { UploadIcon } from "lucide-react";

interface Props {
  index: number;
  filePath: FileList | null;
  setFilePath: (files: FileList | null) => void;
  text?: string;
  limit?: number;
}

const UploadFileMolecule = ({
  index,
  filePath,
  setFilePath,
  text = "Multiple File Upload",
  limit,
}: Props) => {
  return (
    <label
      key={index}
      htmlFor={`image${index}`}
      className="flex flex-wrap overflow-x-hidden justify-center items-center gap-2 hover:cursor-pointer"
    >
      <input
        type="file"
        multiple
        onChange={(e) => setFilePath(validateImages(e.target.files, limit))}
        id={`image${index}`}
        hidden
      />
      <UploadIcon className="h-10 w-16 p-2 hover:cursor-pointer border border-white rounded-lg" />
      <span className="max-w-full">
        {filePath && filePath.length !== 0
          ? filePath.length > 1
            ? `${filePath.length} Files Selected`
            : filePath.item(0)?.name
          : text}
      </span>
    </label>
  );
};

export default UploadFileMolecule;
