import Navbar from '@/components/Layout/Navbar';
import { Box } from '@mui/material';
import Footer from '@/components/Layout/Footer';
import ThemeRegistry from '@/components/Theme/ThemeRegistry';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import './globals.css';

export const metadata = {
  // icons:[
  //   {
  //     icon:'/favicon.ico'
  //   }
  // ],
  title: 'Gawaiku',
  description: 'Gawaiku menyediakan jasa servis profesional untuk memperbaiki dan merawat peralatan Anda. Layanan kami mencakup servis elektronik, perbaikan perangkat rumah tangga, dan banyak lagi.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeRegistry>
            <Box display='flex' flexDirection='column' flex='1 1 auto' position='relative' sx={{ overflowY: 'auto' }}>
              <Navbar />
              <Box component='main' backgroundColor='#E9F6FD'>
                {children}
              </Box>
              <Footer />
            </Box>
          </ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
