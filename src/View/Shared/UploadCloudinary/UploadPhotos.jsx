import axios from "axios";

export const UploadPhotos = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "chomotkar");
  formData.append("folder", "Products");
  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/dezmmga9k/image/upload",
    formData
  );
  return { img: data?.secure_url };
  
};
