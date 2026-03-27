import { fileExt, imageExt, model3DExt, videoExt } from "@/types/upload.types";
import toast from "react-hot-toast";

export function validateFiles(files: FileList | null, limit?: number) {
  if (limit && files && files?.length > limit) {
    return null;
  }
  if (files && files.length > 0) {
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
      if (totalSize > 250 * 1024 * 1024) {
        return null;
      }
      if (!validateFile(files[i])) {
        return null;
      }
    }
    return files;
  }
  return null;
}

export function validateImages(files: FileList | null, limit?: number) {
  if (limit && files && files?.length > limit) {
    return null;
  }
  if (files && files.length > 0) {
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
      if (totalSize > 250 * 1024 * 1024) {
        return null;
      }
      if (!validateImage(files[i])) {
        return null;
      }
    }
    return files;
  }
  return null;
}

export function validateImage(file: File | null) {
  if (!file) {
    return null;
  }

  // const fileType = file.type;
  const filename = file.name;
  const fileSplit = filename.split(".");
  const fileType = fileSplit[fileSplit.length - 1];

  // console.log("fileType: ", fileType);

  if (!imageExt.includes(fileType)) {
    toast.error("Invalid Image type.");
    return null;
  } // 250MB limit
  if (file.size > 250 * 1024 * 1024) {
    toast.error("File is too large, Max file size is 250MB.");
    return null;
  }
  return file;
}

export function validateFile(file: File | null) {
  if (!file) {
    return null;
  }

  // const fileType = file.type;
  const filename = file.name;
  const fileSplit = filename.split(".");
  const fileType = fileSplit[fileSplit.length - 1];

  // console.log("fileType: ", fileType);

  if (!fileExt.includes(fileType)) {
    toast.error("Invalid file type.");
    return null;
  } // 250MB limit
  if (file.size > 250 * 1024 * 1024) {
    toast.error("File is too large, Max file size is 250MB.");
    return null;
  }
  return file;
}

export function validate3DModelFiles(files: FileList | null, limit?: number) {
  if (limit && files && files?.length > limit) {
    return null;
  }
  if (files && files.length > 0) {
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
      if (totalSize > 250 * 1024 * 1024) {
        return null;
      }
      if (!validate3DModelFile(files[i])) {
        return null;
      }
    }
    return files;
  }
  return null;
}

export function validate3DModelFile(file: File | null) {
  if (!file) {
    return null;
  }

  // const fileType = file.type;
  const filename = file.name;
  const fileSplit = filename.split(".");
  const fileType = fileSplit[fileSplit.length - 1];

  // console.log("fileType: ", fileType);

  if (!model3DExt.includes(fileType)) {
    toast.error("Invalid file type.");
    return null;
  } // 250MB limit
  if (file.size > 250 * 1024 * 1024) {
    toast.error("File is too large, Max file size is 250MB.");
    return null;
  }
  return file;
}

export function validateVideoFile(file: File | null) {
  if (!file) {
    return null;
  }

  // const fileType = file.type;
  const filename = file.name;
  const fileSplit = filename.split(".");
  const fileType = fileSplit[fileSplit.length - 1];

  // console.log("fileType: ", fileType);

  if (!videoExt.includes(fileType)) {
    toast.error("Invalid file type.");
    return null;
  } // 250MB limit
  if (file.size > 250 * 1024 * 1024) {
    toast.error("File is too large, Max file size is 250MB.");
    return null;
  }
  return file;
}

export function validateVideoFiles(files: FileList | null, limit?: number) {
  if (limit && files && files?.length > limit) {
    return null;
  }
  if (files && files.length > 0) {
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
      if (totalSize > 250 * 1024 * 1024) {
        return null;
      }
      if (!validateVideoFile(files[i])) {
        return null;
      }
    }
    return files;
  }
  return null;
}

export type UploadRoutes =
  | "LOGO"
  | "3D MODEL"
  | "PROJECT IMAGE"
  | "PROJECT VIDEO"
  | "HERO IMAGE"
  | "HERO VIDEO"
  | "CONTACT"
  | "GENERAL";
