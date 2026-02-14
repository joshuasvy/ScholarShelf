import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME || "scholarshelf",
  api_key: process.env.CLOUDINARY_KEY || "396219383774655",
  api_secret: process.env.CLOUDINARY_SECRET || "DIJSG84qtZAtclILtFqhpCOwWw",
});

export default cloudinary;
