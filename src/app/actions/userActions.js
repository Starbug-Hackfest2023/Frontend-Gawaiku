'use server';

import { updateUserProfile } from '@/services/userService';
import { revalidateTag } from 'next/cache';

export const updateUser = async (data, id) => {
  await updateUserProfile(data, id);
  revalidateTag('profile');
};