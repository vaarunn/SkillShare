import axios from "axios";
import { instanceFile, instanceNoFile } from "../../util/customAxios";

export const registerService = async (userData) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    userData
  );
  return response.data;
};

export const loginService = async (userData) => {
  console.log("correct user");
  const response = await axios.post(
    "http://localhost:5000/api/users/register",
    userData,
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const checkUserService = async () => {
  const response = await axios("http://localhost:5000/api/users/me", {
    withCredentials: true,
  });
  return response.data;
};

export const updatePasswordService = async ({ oldPassword, newPassword }) => {
  const response = await axios.put(
    "http://localhost:5000/api/users/updatePassword",
    { oldPassword, newPassword },
    {
      withCredentials: true,
    }
  );
  return response.data;
};

export const updateProfileService = async (myFile) => {
  console.log(myFile);

  const response = await axios.put(
    "http://localhost:5000/api/users/updateProfile",
    myFile,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }
  );

  console.log(response.data);
  return response.data;
};

export const logoutService = async (myFile) => {
  const response = await axios.get("http://localhost:5000/api/users/logout", {
    withCredentials: true,
  });

  console.log(response.data);
  return response.data;
};

export const removeCourseFromWatchListService = async (courseId) => {
  console.log(courseId);
  const response = await axios.post(
    `http://localhost:5000/api/users/removeFromPlaylist?id=${courseId}`,
    {},
    {
      withCredentials: true,
    }
  );
  console.log(response.data);
  return response.data;
};

const authServices = {
  registerService,
  checkUserService,
  loginService,
  updatePasswordService,
  updateProfileService,
  logoutService,
  removeCourseFromWatchListService,
};

export default authServices;
