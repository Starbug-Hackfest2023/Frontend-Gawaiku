'use server';

import { getToken } from '@/app/actions/tokenAction';
import axiosInstance from '@/utils/fetch';

const HEADERS = async () => {
  let getTokenAction = await getToken();
  let token = await getTokenAction();
  return { headers: { Authorization: `Bearer ${token}` } };
};

const BASE_URL = 'https://gawaikuapi-production.up.railway.app';

const getProfile = async () => {
  const response = await fetch(`${BASE_URL}/auth/profile`, { ...HEADERS, next: { tags: ['profile'] }, cache: 'force-cache' });
  const data = await response.json();
  return data?.data;
};

const updateUserProfile = async (res, id) => {
  const response = await axiosInstance.put(`/auth/user/${id}`, res, HEADERS);
  return response.data;
};

const registerUsers = async (res) => {
  return await axiosInstance.post('/auth/registerUser', res, HEADERS);
};

const loginUsers = async (res) => {
  return await axiosInstance.post('/auth/loginUser', res, HEADERS);
};

export { getProfile, updateUserProfile, registerUsers, loginUsers };
