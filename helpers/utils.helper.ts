export const BASE_URL = process.env.BETTER_AUTH_URL;
// console.log("BASE_URL: ", BASE_URL);

export const apiPaths = {
  AUTH: {
    LOGIN: `${BASE_URL}/user/login`,
    REGISTER: `${BASE_URL}/user/register`,
    GET_PROFILE: `${BASE_URL}/user/profile`,
  },
};

export const DeleteRoutes = {
  DELETE_PROJECT_VIDEO: "/api/admin/project/delete/video/",
  DELETE_PROJECT_IMAGE: "/api/admin/project/delete/image/",
  DELETE_PROJECT_MODEL: "/api/admin/project/delete/model/",
  DELETE_LOGO_ROUTE: "/api/admin/logo/delete/",
  DELETE_HERO_ROUTE: "/api/admin/hero/media/delete/",
};

export const UploadRoutes = {
  UPLOAD_PROJECT_VIDEO: "/api/upload/video/hero",
  UPLOAD_PROJECT_IMAGE: "/api/upload/images/project",
  UPLOAD_PROJECT_MODEL: "/api/upload/3d-model",
  UPLOAD_LOGO_ROUTE: "/api/upload/images/logo",
  UPLOAD_HERO_IMAGE_ROUTE: "/api/upload/images/hero",
  UPLOAD_HERO_VIDEO_ROUTE: "/api/upload/video/hero",
  UPLOAD_CONTACT_ME_ROUTE: "/api/upload/contact-me",
};
