import { useUnsplashImagesQuery } from "./useUnsplashImagesQuery.hook";

export function useGetRandomPlaceHolderImageQuery() {
  const { mutateAsync: getImageFn } = useUnsplashImagesQuery();

  const getRandomImageByName = async ({ placeName }: { placeName: string }) => {
    const max = 9;
    const min = 0;
    const choice = Math.floor(Math.random() * (max - min)) + min;
    const page_number = Math.floor(Math.random() * (max - min)) + min;
    const res = await getImageFn({
      placeName,
      page_number,
      per_page: 10,
    });

    return res.data.data.results[choice].urls.regular;
  };
  return { getRandomImageByName };
}
