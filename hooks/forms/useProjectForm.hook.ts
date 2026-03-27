import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useLogoQuery } from "@/hooks/queries/useLogoQuery.hook";
// import { useEffect } from "react";
import {
  projectImageSchema,
  projectImageSchemaType,
  projectModelSchema,
  projectModelSchemaType,
  // ProjectFormType,
  projectSchema,
  projectSchemaType,
  projectSettingSchema,
  projectSettingSchemaType,
  projectTextSchema,
  projectTextSchemaType,
  projectVideoSchema,
  projectVideoSchemaType,
} from "@/validations/project.zod";
import { useAddProjectStore } from "@/store/admin/addProject.store";
import { ProjectType } from "@/types/project.types";

export const useProjectForm = () => {
  const form = useForm<projectSchemaType>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "",
      description: "",
      isFeatured: false,
      thumbnail: {},
      projectImages: [],
      projectModels: [],
      projectVideos: [],
    },
  });

  return form;
};

export const useProjectTextForm = () => {
  const title = useAddProjectStore((state) => state.title);
  const description = useAddProjectStore((state) => state.description);
  const form = useForm<projectTextSchemaType>({
    resolver: zodResolver(projectTextSchema),
    defaultValues: {
      title: title ? title : "",
      description: description ? description : "",
    },
  });

  return form;
};

export const useProjectImagesForm = () => {
  const projectImages = useAddProjectStore((state) => state.projectImages);
  const form = useForm<projectImageSchemaType>({
    resolver: zodResolver(projectImageSchema),
    defaultValues: {
      projectImages: projectImages ? projectImages : [],
    },
  });

  return form;
};

export const useProjectVideosForm = () => {
  const projectVideos = useAddProjectStore((state) => state.projectVideos);

  const form = useForm<projectVideoSchemaType>({
    resolver: zodResolver(projectVideoSchema),
    defaultValues: {
      projectVideos: projectVideos ? projectVideos : [],
    },
  });

  return form;
};

export const useProjectModelsForm = () => {
  const projectModels = useAddProjectStore((state) => state.projectModels);

  const form = useForm<projectModelSchemaType>({
    resolver: zodResolver(projectModelSchema),
    defaultValues: {
      projectModels: projectModels ? projectModels : [],
    },
  });

  return form;
};

export const useProjectSettingForm = () => {
  const isFeatured = useAddProjectStore((state) => state.isFeatured);
  const thumbnail = useAddProjectStore((state) => state.thumbnail);

  const form = useForm<projectSettingSchemaType>({
    resolver: zodResolver(projectSettingSchema),
    defaultValues: {
      isFeatured: isFeatured ? isFeatured : false,
      thumbnail: thumbnail
        ? thumbnail
        : { type: "Image", source: "Upload", fileOrUrl: "" },
    },
  });

  return form;
};

export const useSetProjectDataInStore = () => {
  const setTitle = useAddProjectStore((state) => state.setTitle);
  const setImages = useAddProjectStore((state) => state.setImages);
  const setIsFeatured = useAddProjectStore((state) => state.setIsFeatured);
  const setDescription = useAddProjectStore((state) => state.setDescription);
  const setProjectVideos = useAddProjectStore(
    (state) => state.setProjectVideos,
  );
  const setProjectModels = useAddProjectStore(
    (state) => state.setProjectModels,
  );
  const setThumbnail = useAddProjectStore((state) => state.setThumbnail);

  const resetData = () => {
    // console.log("data ", data);
    // console.log("project images was ", projectImages);
    setTitle(null);
    setDescription(null);
    setImages(undefined);
    // console.log("project images is ", projectImages);
    setProjectModels(undefined);
    setProjectVideos(undefined);
    setIsFeatured(false);

    setThumbnail(undefined, "Image", "Upload", undefined);
  };

  const setProjectDataInStore = (data: ProjectType) => {
    if (!data._id) return;

    // console.log("data ", data);
    // console.log("project images was ", projectImages);
    setTitle(data.title);
    setDescription(data.description);
    setImages(data.images);
    // console.log("project images is ", projectImages);
    setProjectModels(data.models);
    // console.log("videos ", data.videos);
    setProjectVideos(data.videos);
    // console.log("project videos are ", projectVideos);
    setIsFeatured(data.isFeatured);

    setThumbnail(
      data.thumbnail._id,
      data.thumbnail.type,
      data.thumbnail.source,
      data.thumbnail.fileOrUrl,
    );
  };

  return { setProjectDataInStore, resetData };
};
