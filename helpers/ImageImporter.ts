export const ImageImporter = async (
  folder: string,
  imageName: string | undefined,
) => {
  try {
    // Construct the dynamic path: ../chapters/[chapterId]/images/[imageName]
    const imageSrc = await import(`@/uploads/${folder}/${imageName}`);
    // const imageSrc = await import("@/uploads/logos/5b26de23.jpg");
    return imageSrc; // Image URL is in the default export
  } catch (error) {
    console.log(
      `Failed to load image ${imageName} form folder ${folder}:`,
      error,
    );
    // Fallback to a placeholder image (imported statically)
    const fallback = await import("@/public/file.svg");
    return fallback;
  }
};
