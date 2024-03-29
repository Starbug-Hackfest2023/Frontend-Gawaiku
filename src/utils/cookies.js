'use server';

import { cookies } from 'next/headers';

const getCookieClient = () => {
  const token = cookies().get('token').value;
  return token;
};

export { getCookieClient };

