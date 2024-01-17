import { getProfile } from '@/services/userService';
import UserSettingsClient from './page-client';

async function UserSettings() {
  let dataUser;
  try {
    dataUser = await getProfile();
  } catch (err) {
    console.error(err);
  }

  return <UserSettingsClient dataUser={dataUser} />;
}

export default UserSettings;
