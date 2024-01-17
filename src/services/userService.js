'use server';

import { getToken } from '@/app/actions/tokenAction';
import axiosInstance from '@/utils/fetch';

const HEADERS = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

const BASE_URL = 'https://gawaikuapi-production.up.railway.app';

let getTokenAction = async () => await getToken();
let token = getTokenAction();

const getProfile = async () => {
  const response = await fetch(`${BASE_URL}/auth/profile`, { ...HEADERS(token), next: { tags: ['profile'] }, cache: 'force-cache' });
  const data = await response.json();
  return data?.data;
};

const updateUserProfile = async (res, id) => {
  const response = await axiosInstance.put(`/auth/user/${id}`, res, HEADERS(token));
  return response.data;
};

const registerUsers = async (res) => {
  return await axiosInstance.post('/auth/registerUser', res, HEADERS(token));
};

const loginUsers = async (res) => {
  return await axiosInstance.post('/auth/loginUser', res, HEADERS(token));
};

export { getProfile, updateUserProfile, registerUsers, loginUsers };
