import axios from "axios";

export const UploadPhotos = async (file, folderName) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "chomotkar");
  formData.append("folder", `Chomotkar/${folderName}`);

  try {
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dezmmga9k/image/upload",
      formData
    );

    console.log(data);

    return { img: data?.secure_url, publicId: data?.public_id };
  } catch (error) {
    console.error("Error uploading photo to Cloudinary", error);
    throw error;
  }
};
