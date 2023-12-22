import axios from "axios";

export const UploadPhotos = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "chomotkarfashion");
  formData.append("folder", "chomotkar-fashion");
  const { data } = await axios.post(
    "https://api.cloudinary.com/v1_1/dxixdugif/image/upload",
    formData
  );
  return { img: data?.secure_url };
};
