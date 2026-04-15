import axios from "./axiosInstance";

export const fetchUserByMobile = async (mobile) => {
  const res = await axios.post(
    "/encrV4/CBOI/fetch/fetchById",
    {
      mobile_number: mobile,
    }
  );

  return res.data;
};