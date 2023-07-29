import axios from "axios";

// const url = "https://profiler-kek7.onrender.com/api";
const url = "http://localhost:3033/api";

//get data
export const getProfile = async () => {
  return await axios
    .get(`${url}/profile/allprofile`)
    .then((res) => res.data)
    .catch((err) => err);
};

//get one profile
export const getOneProfile = async (id: string | any) => {
  return await axios
    .get(`${url}/profile/userprofile/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};

//create new profile
export const createNewProfile = async ({ name, email, age, bio }: any) => {
  return await axios
    .post(`${url}/profile/newprofile`, {
      name: name,
      email: email,
      age: age,
      bio: bio,
    })
    .then((res) => res.data)
    .catch((err) => err);
};

//Delete profile
export const removeProfile = async (id: string | any) => {
  return await axios
    .delete(`${url}/profile/removeprofile/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};

// Update Profile
export const updateProfile = async (id: string | any) => {
  return await axios
    .patch(`${url}/profile/editprofile/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
};
