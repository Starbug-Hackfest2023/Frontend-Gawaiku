'use server';

import { loginUsers, registerUsers } from '@/services/userService';

export async function loginUser(data) {
  try {
    const user = await loginUsers(data);
    // setCookie('token', user.data.data.token, { cookies });
    return user?.data;
  } catch (err) {
    console.error(err);
  }
}

export async function registerUser(data) {
  try {
    const originalDate = new Date(data.birthDate);
    const birthDate = originalDate.toISOString().split('T')[0];
    const newestData = { ...data, birthDate };
    await registerUsers(newestData);
  } catch (err) {
    console.error(err);
  }
}
