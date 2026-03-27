import { useUpload } from "@/hooks/mutations/useUploadMutation.hook";
import { UploadRoutes } from "@/validations/upload.validate";

export function useUploadSubmit() {
  const { mutateAsync: upload, isPending } = useUpload();

  async function uploadFile(files: FileList | null, route: UploadRoutes) {
    const fileUrls: string[] = [];

    if (files) {
      for (const file of files) {
        const response = await upload({ file: file, route: route });
        const { filename } = await response;
        fileUrls.push(filename);
      }
    }

    return fileUrls.length > 0 ? fileUrls[0] : null;
  }

  return { uploadFile, isPending };
}
