export interface ProjectRequest {
  _id?: string;
  fullName: string;
  email: string;
  subject: string;
  description: string;
  fileUrls?: string[] | null;
}
