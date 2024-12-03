import apiClient from '../apiClient.js';

const LoginApi = async data => {
  try {
    const response = await apiClient.post(`/api/admin/login`, data); // Pass data in post request
    console.log(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
const Forgetapi = async data => {
  try {
    const response = await apiClient.post(`api/admin/forgot-password`, data); // Pass data in post request
    console.log(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
const OtpverifyApi = async data => {
  try {
    const response = await apiClient.post(`/api/admin/verify-otp`, data); // Pass data in post request
    console.log(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
const VerifyPasswordApi = async data => {
  try {
    const response = await apiClient.post(`/api/admin/reset-password`, data); // Pass data in post request
    console.log(response);

    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
const GetActiveOffers = async () => {
  try {
    const response = await apiClient.get(`api/admin/offers?active=true`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};
const GetCompleteOffers = async () => {
  try {
    const response = await apiClient.get(`api/admin/offers?active=false`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export default {
  LoginApi,
  Forgetapi,
  OtpverifyApi,
  VerifyPasswordApi,
  GetActiveOffers,
  GetCompleteOffers,
};
