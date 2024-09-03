import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

const avatarUploadCloudinary = async (imagepath) => {
  try {
    if (!imagepath) {
      return null;
    } else {
      const uploadimage = await cloudinary.uploader.upload(imagepath);
      return uploadimage;
    }
  } catch (error) {
    fs.unlinkSync(imagepath);
    return null;
  }
};

export { avatarUploadCloudinary };
