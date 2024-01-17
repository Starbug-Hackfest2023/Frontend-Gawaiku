import PageBase from '@/components/Layout/PageBase';
import ThemeRegistry from '@/components/Theme/ThemeRegistry';
import { getProfile } from '@/services/userService';
import { Box } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { getToken } from './actions/tokenAction';
import './globals.css';

export const metadata = {
  title: 'Gawaiku',
  description: 'Gawaiku menyediakan jasa servis profesional untuk memperbaiki dan merawat peralatan Anda. Layanan kami mencakup servis elektronik, perbaikan perangkat rumah tangga, dan banyak lagi.',
};

export default async function RootLayout({ children }) {
  let isAuth;
  let dataUser;
  let token = await getToken();
  isAuth = token;
  try {
    dataUser = await getProfile();
  } catch (err) {
    console.error(err);
  }

  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeRegistry>
            <Box display='flex' flexDirection='column' flex='1 1 auto' position='relative' sx={{ overflowY: 'auto' }}>
              <PageBase isAuth={isAuth} dataUser={dataUser}>
                <Box component='main' backgroundColor='#E9F6FD'>
                  {children}
                </Box>
              </PageBase>
            </Box>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
